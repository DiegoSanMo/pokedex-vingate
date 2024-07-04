import styled, { css } from "styled-components";

export type Variant = "rounded" | "circle" | "normal";

export const ButtonStyled = styled.button<{ $color?: string; $type: Variant }>`
  background-color: ${(props) => (props.$color ? props.$color : "#d6d3d3")};

  ${(props) => {
    switch (props.$type) {
      case "rounded":
        return css`
          border-radius: 10px;
          width: 100px;
          height: 50px;
        `;
      case "circle":
        return css`
          border-radius: 100px;
          width: 100px;
          height: 100px;
        `;

      default:
        return css`
          width: 100px;
          height: 50px;
        `;
    }
  }}
`;
