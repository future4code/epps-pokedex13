import React from 'react'
import styled from 'styled-components'
import CardPokedex from '../../components/CardPokedex'
import Grid from '@material-ui/core/Grid'


// const ContainerPokedex = styled.div`
//   display: grid;
//   align-items: center;
//   justify-content: center;
// `

// const ImagePokedex = styled.image`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   margin: auto;
//   padding: 1em;
//   grid-gap: 20px;
//   align-items: center;
//   flex-grow: 1;
//   justify-content: center;
// `
// const Button = styled.button`
//   display: grid;
//   justify-content: center;
//   align-items: center;
//   width: 120px;
//   padding: 5px;
//   border-radius: 5px;   
// `
// const ButtonsContainer = styled.section`
//   display: flex;
// `
const Pokedex = () => {
 
  return (
    <div>
      <h1>Pokedex</h1>
      {/* <ContainerPokedex>
        <ImagePokedex>
          <img src ={"https://picsum.photos/200/300"} />
        </ImagePokedex>
          <ButtonsContainer>
            <Button>Remover</Button>
            <Button>Ver detalhes</Button>
          </ButtonsContainer>
      </ContainerPokedex> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <CardPokedex />
        </Grid>
      </Grid>
    </div>
    )
}

export default Pokedex