import React from 'react';

import { StyledCard, ImageContainer } from './style'

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function SimpleCard() {

  return (
    <StyledCard elevation={3}>
      <CardContent>
        <Typography variant="outlined">
          <strong>Charmander</strong>
        </Typography>
        <ImageContainer
          image="https://picsum.photos/id/1025/300/200"
          title="PokeDog"
        />
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Adicionar</Button>
        <Button size="small" variant="contained">Detalhes</Button>
      </CardActions>
    </StyledCard>
  );
}
