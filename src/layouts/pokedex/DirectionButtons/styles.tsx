import styled, { css } from "styled-components";

export const DirectionContainer = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DirectionButtonHorizontal = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

// DirectionButton styled component with dynamic styles
export const DirectionButton = styled.button<{
  $direction: "horizontal" | "vertical";
  $position: "top" | "bottom" | "left" | "right";
}>`
  background-color: black;
  /* border: none; */
  border: .4px solid #808080;
  border-radius: 10px;
  display: inline-flex;
  padding: 10px;
  :hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }

  ${(props) =>
    props.$direction === "horizontal"
      ? css`
          height: 70px;
          width: 110px;
          justify-content: ${props.$position === "left" ? "start" : "end"};
          align-items: center;
        `
      : css`
          height: 150px;
          width: 80px;
          justify-content: center;
          align-items: ${props.$position === "top" ? "flex-start" : "flex-end"};
        `}
`;
