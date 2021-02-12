import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import styled from "styled-components";
import CardPokedex from "../../components/CardPokedex";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";

const Pokedex = (props) => {
  const history = useHistory();
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [images, setImages] = useState("");
  console.log("mypokemons", states.myPokemons);
  const url = props.url;

  const list =
    states.myPokemons &&
    states.myPokemons.map((pokemon) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <CardPokedex
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
            handleRemove={() => requests.removePokemon(pokemon)}
          />
        </Grid>
      );
    });

  return (
    <div>
      <h1>Pokedex</h1>
      <button onClick={() => goToHome(history)}>Voltar para Home</button>
      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  );
};

export default Pokedex;
