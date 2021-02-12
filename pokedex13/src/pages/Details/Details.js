import React, { useState, useEffect, useContext } from "react";
import {
  PokeInfosContainer,
  ImagesContainer,
  ImgWrapper,
  StatsContainer,
  TitleContainer,
  TextContainer,
  TypeAndMovesContainer,
  TypesContainer,
  MovesContainer,
} from "./style";
import axios from "axios";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { useHistory } from "react-router-dom";
import { goToPokedex, goToHome } from '../../routes/coordinator'


const Details = () => {
  const history = useHistory();
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${states.url}`)
      .then((res) => {
        console.log(res.data);
        setPokemonName(res.data.species.name);
        setPokemonImage(res.data.sprites);
        setPokemonInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const stats = pokemonInfo.stats ?
  // pokemonInfo.stats.slice(0, 5).map((pokemon) => {
  //   return (
  //     <p>{pokemon.base_stat}</p>
  //   )
  // }) : <p>buscando informações</p>

  // console.log("stats: ", stats[0])

  return (
    <div>
      <h1>Details Page</h1>
      <button onClick={() => goToPokedex(history)}>Ir para Pokédex</button>
      <button onClick={() => goToHome(history)}>Ir para Home</button>
      {pokemonInfo && (
        <PokeInfosContainer>
          <ImagesContainer>
            <ImgWrapper
              src={pokemonImage.front_default}
              alt="Imagem pokémon frente"
            />
            <ImgWrapper
              src={pokemonImage.back_default}
              alt="Imagem pokémon verso"
            />
          </ImagesContainer>

          <StatsContainer>
            <TitleContainer>
              <h1>Poderes</h1>
              {pokemonInfo.stats &&
                pokemonInfo.stats.slice(0, 5).map((power) => {
                  return (
                    <p>
                      {power.stat.name}: {power.base_stat}
                    </p>
                  );
                })}
            </TitleContainer>
          </StatsContainer>

          <TypeAndMovesContainer>
            <TypesContainer>
              {pokemonInfo.types &&
                pokemonInfo.types.map((element) => {
                  return <p>{element.type.name}</p>;
                })}
            </TypesContainer>

            <MovesContainer>
              <TitleContainer>
                <h1>Principais ataques</h1>
                {pokemonInfo.moves &&
                  pokemonInfo.moves.slice(0, 5).map((atack) => {
                    return <p>{atack.move.name}</p>;
                  })}
              </TitleContainer>
            </MovesContainer>
          </TypeAndMovesContainer>
        </PokeInfosContainer>
      )}
    </div>
  );
};

export default Details;
