import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { StyledCard, ImageContainer } from './style'

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { goToDetails } from '../../routes/coordinator'


export default function SimpleCard(props) {
  const [pokemonImages, setPokemonImages] = useState({})
  const details = props.pokemon.url
  const history = useHistory();

  useEffect(() => {
    getDetails()
  }, [])

  const getDetails = () => {
    axios.get(`${details}`)
      .then((res) => {
        // console.log(res.data.sprites)
        setPokemonImages(res.data.sprites)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    // <img 
    //   src = {pokemonImages.front_default}
    // />
    <StyledCard elevation={3}>
      <CardContent>
        <Typography>
          <strong>{props.pokemon.name}</strong>
        </Typography>
        <ImageContainer
          src = {pokemonImages.front_default}
          alt="teste"
        />
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Adicionar</Button>
        <Button onClick={() => goToDetails(history)} size="small" variant="contained">Detalhes</Button>
      </CardActions>
    </StyledCard>
  );
}
