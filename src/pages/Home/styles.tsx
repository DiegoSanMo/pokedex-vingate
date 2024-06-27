import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 550px;
  overflow: scroll;
  padding: 10px;
  border-radius: 10px;
  background-color: #dcdfdf;
`;

export const ButtonContainer = styled.div`
  background: blue;
  height: 400px;
  display: flex;
  align-self: end;
  clip-path: circle(70% at 0 70%);
`;
