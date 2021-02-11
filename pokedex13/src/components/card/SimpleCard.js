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
  const [images, setImages] = useState('')
  const url = props.url

  useEffect(() => {
    axios.get(`${url}`)
    .then((res) => {
      setImages(res.data.sprites.front_default)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <StyledCard elevation={3}>
      <CardContent>
        <Typography>
          {props.name}
        </Typography>
        <ImageContainer
          src = {images}
          alt = {props.name}
        />
      </CardContent>
      <CardActions>
        <Button>Adicionar</Button>
        <Button>Detalhes</Button>
      </CardActions>
    </StyledCard>
  );
}
