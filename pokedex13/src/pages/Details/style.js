import styled from "styled-components";

export const PokeInfosContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  border: 1px solid black;
  border-radius: 10px;
  height: 25vh;
`;

export const StatsContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleContainer = styled.h2`
  align-self: center;
  padding: 0 10px;
  color: #000;
  margin: auto;

  h1 {
    text-align: center;
    font-size: 1em;
  }
`;

export const TextContainer = styled.p`
    font-size: 1em;
    padding-left: 10px;
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  height: 10%;
  display: flex;
  justify-content: space-around;

  p {
      border: 1px solid black;
      border-radius: 10px;
      margin: auto;
      padding: 2px 10px;
  }
`;

export const MovesContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

