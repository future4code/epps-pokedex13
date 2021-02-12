import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import SimpleCard from "../../components/card/SimpleCard";
import GlobalState from "../../global/GlobalState";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { goToPokedex } from "../../routes/coordinator";

const Home = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const history = useHistory();

  useEffect(() => {
    requests.getPokemons();
  }, []);

  const list =
    states.pokemonsNameList &&
    states.pokemonsNameList.map((pokemon) => {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
            handleAdd={() => requests.addPokemon(pokemon)}
          />
        </Grid>
      );
    });

  console.log(states.pokemonsNameList);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => goToPokedex(history)}>Ir para Pokédex</button>
      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  );
};

export default Home;
