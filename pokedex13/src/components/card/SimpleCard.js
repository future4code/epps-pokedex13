import React from 'react';
import styled from 'styled-components'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const ImageContainer = styled(CardMedia)`
  max-width: 300px;
  height: 200px;
`

export default function SimpleCard() {

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Pokemon name
        </Typography>
        <ImageContainer
          image="https://picsum.photos/id/1025/300/200"
          title="PokeDog"
        />
      </CardContent>
      <CardActions>
        <Button size="small">Adicionar</Button>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
}
