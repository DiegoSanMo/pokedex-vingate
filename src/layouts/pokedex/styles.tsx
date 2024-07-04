import styled from "styled-components";

export const Case = styled.div`
  padding: 30px 0px 10px 0px;
  background-color: #a236a2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;
  border-bottom-left-radius: 220px 170px;
  border-bottom-right-radius: 220px 170px;
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 400px;

  max-width: 400px;
  min-width: 400px;
  overflow: scroll;
  padding: 10px;
  background-color: #dcdfdf;
  /* border: 30px solid black; */
  border-radius: 10px;

  border-top: 50px solid black;
  border-bottom: 100px solid black;

  border-left: 100px solid black;
  border-right: 100px solid black;

  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;
  border-bottom-left-radius: 90px 70px;
  border-bottom-right-radius: 90px 70px;
`;

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-around;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

`
