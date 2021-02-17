import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import SimpleCard from "../../components/card/SimpleCard";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { goToPokedex } from "../../routes/coordinator";
import { ContainerButton } from "./style";

const Home = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const history = useHistory();

  // useEffect(() => {
  //   requests.getPokemons();
  // }, []);

  const handleNewList = () => { 
    setters.setNewPokemons(states.pokemonsNameList.next)
  }

  const handleOldList = () => {
    if (states.pokemonsNameList.previous === null) {
        alert("Pagina não encontrada")
    } else {
        setters.setNewPokemons(states.pokemonsNameList.previous)
    }
}

  const list =
    states.pokemonsNameList.results &&
    states.pokemonsNameList.results.map((pokemon) => {
      return (
        <Grid item xs={12} sm={6} md={3}>
          <SimpleCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
            handleAdd={() => requests.addPokemon(pokemon)}
          />
        </Grid>
      );
    });

  return (
    <div>
      <ContainerButton>
        <button onClick={() => goToPokedex(history)}>Ir para Pokédex</button>
        <button onClick={handleOldList}>Lista anterior</button>
        <button onClick={handleNewList}>Lista nova</button>
      </ContainerButton>

      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  );
};

export default Home;
