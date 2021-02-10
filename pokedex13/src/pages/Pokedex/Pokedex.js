import React from 'react'
import styled from 'styled-components'

const ContainerPokedex = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`

const ImagePokedex = styled.image`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  padding: 1em;
  grid-gap: 20px;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`
const Button = styled.button`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 120px;
  padding: 5px;
  border-radius: 5px;   
`
const ButtonsContainer = styled.section`
  display: flex;
`
const Pokedex = () => {
    
  return (
    <div>
      <h1>Pokedex</h1>
      <ContainerPokedex>
        <ImagePokedex>
          <img src ={"https://picsum.photos/200/300"} />
        </ImagePokedex>
          <ButtonsContainer>
            <Button>Remover</Button>
            <Button>Ver detalhes</Button>
          </ButtonsContainer>
      </ContainerPokedex>
    </div>
    )
}

export default Pokedex