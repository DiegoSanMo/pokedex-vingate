import { css } from "styled-components";

export type Direction = 'top' | 'bottom' | 'left' | 'right';

export const getHoverTransform = (direction: Direction) => {
    switch (direction) {
      case 'top':
        return css`
          transform: translate(0px, 3px);
        `;
      case 'bottom':
        return css`
          transform: translate(0px, -3px);
        `;
      case 'left':
        return css`
          transform: translate(3px, 0px);
        `;
      case 'right':
      default:
        return css`
          transform: translate(-3px, 0px);
        `;
    }
  };