import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export const StyledCard = styled(Card)`
  /* max-height: 300px; */
  min-width: 20vw;
`;

export const PokeName = styled.h4`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.2em;
`;

export const ImageContainer = styled.img`
  /* max-width: 280px; */
  max-height: 200px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  min-width: 40%;
`;
