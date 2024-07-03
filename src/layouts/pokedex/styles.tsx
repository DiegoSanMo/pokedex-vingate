import styled, { css } from "styled-components";

export const Case = styled.div`
  padding: 10px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 550px;
  min-width: 1000px;
  overflow: scroll;
  padding: 10px;
  background-color: #dcdfdf;
  border: 30px solid black;
  border-radius: 10px;
  width: 70%;
`;

export const ScreenSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-around;
`
