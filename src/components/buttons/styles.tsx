import styled from "styled-components";

export const ButtonStyled = styled.button<{$color?: string}>`
    background-color: ${(props) => props.$color ? props.$color : '#d6d3d3'};
    width: 100px;
    height: 30px;

`