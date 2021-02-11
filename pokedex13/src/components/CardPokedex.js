import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { StyledCard, ImageContainer } from '../components/card/style';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { goToDetails } from '../../src/routes/coordinator';
import GlobalStateContext from '../contexts/GlobalStateContext'
import GlobalState from '../global/GlobalState';

export default function CardPokedex(props) {
  const {states, setters, requests} = useContext(GlobalStateContext)
  const [images, setImages] = useState('')
  const url = props.url
  const history = useHistory()

  useEffect(() => {
    axios.get(`${url}`)
    .then((res) => {
      setImages(res.data.sprites.front_default)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return(
    <StyledCard elevation={2}>
      <CardContent>
        <Typography>
          {props.name}
        </Typography>
        <ImageContainer src={images} alt={props.name}/>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Remover</Button>
        <Button onClick={()=>goToDetails(history)} size="small" variant="contained">Detalhes</Button>
      </CardActions>
    </StyledCard>
  )
}