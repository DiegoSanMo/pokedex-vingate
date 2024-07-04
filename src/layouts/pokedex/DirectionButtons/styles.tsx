import styled from "styled-components";
import { Direction, getHoverTransform } from "../../../utils";


export const DirectionContainer = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.path<{ $direction: Direction }>`
  fill: black;

  transition: fill 0.3s ease, transform 0.3s ease;

  &:hover {
    ${(props) => getHoverTransform(props.$direction)}
  }
`;
