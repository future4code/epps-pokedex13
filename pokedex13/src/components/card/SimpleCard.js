import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { StyledCard, ImageContainer } from './style'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { goToDetails } from '../../routes/coordinator'
import GlobalStateContext from '../../contexts/GlobalStateContext'

export default function SimpleCard(props) {
  const history = useHistory();
  const { states, setters, requests } = useContext(GlobalStateContext)


  // useEffect(() => {
  //   requests.getPokemonsDetails(props.pokemon.url)
  // }, [])
  // console.log(states.pokemonsDetails)

  // const images = states.pokemonsDetails.map((pokemon) => {
  //   return (
  //     <img src={pokemon.sprites.front_default} />
  //   )
  // })

  return (
    <>
      {states.pokemonsDetails.length !== 0 ? 
      <div>
        <p>{props.pokemon.name}</p> 
        {/* {images} */}
      </div>:
        <p>Buscando informações</p>
      }
    </>
  );
}
