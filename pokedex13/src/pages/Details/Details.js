import React from "react";
import {
  PokeInfosContainer,
  ImagesContainer,
  ImgWrapper,
  StatsContainer,
  TitleContainer,
  TextContainer,
  TypeAndMovesContainer,
  TypesContainer,
  MovesContainer,
} from "./style";

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
      <PokeInfosContainer>
        <ImagesContainer>
          <ImgWrapper src={'https://picsum.photos/300/300?a=1'}/>
          <ImgWrapper src={'https://picsum.photos/300/300?a=2'}/>
        </ImagesContainer>

        <StatsContainer>
          <TitleContainer>
            <h1>Poderes</h1> 
          </TitleContainer>
          <TextContainer>
            <p>HP</p>
            <p>attack</p>
            <p>defence</p>
            <p>special-atack</p>
            <p>special-defence</p>
            <p>speed</p>
          </TextContainer>   
        </StatsContainer>

        <TypeAndMovesContainer>
          <TypesContainer>
            <p>grass</p>
            <p>fire</p>
          </TypesContainer>

          <MovesContainer>
            <TitleContainer>
              <h1>Principais ataques</h1>
              </TitleContainer>
              <TextContainer>
                <p>cut</p>
                <p>bind</p>
                <p>wine-whip</p>
                <p>swords-dance</p>
                <p>headbutt</p>
              </TextContainer>  
          </MovesContainer>
        </TypeAndMovesContainer>
      </PokeInfosContainer>
    </div>
  );
};

export default Details;
