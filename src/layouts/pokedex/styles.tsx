import styled, { css } from "styled-components";

export const Case = styled.div`
  padding: 10px;
  background-color: red;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 550px;
  overflow: scroll;
  padding: 10px;
  background-color: #dcdfdf;
  border: 30px solid black;
  border-radius: 10px;
  width: 70%;
`;
