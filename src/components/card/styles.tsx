import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 250px;
  height: auto;
  margin: 10px 10px;
  font-size: 1.5rem;

  // TODO: This should be changed to only appears it's selected or you already pointer on a specific pokemon
  :hover {
    background: linear-gradient(to right, black 4px, transparent 4px) 0 0,
      linear-gradient(to right, black 4px, transparent 4px) 0 100%,
      linear-gradient(to left, black 4px, transparent 4px) 100% 0,
      linear-gradient(to left, black 4px, transparent 4px) 100% 100%,
      linear-gradient(to bottom, black 4px, transparent 4px) 0 0,
      linear-gradient(to bottom, black 4px, transparent 4px) 100% 0,
      linear-gradient(to top, black 4px, transparent 4px) 0 100%,
      linear-gradient(to top, black 4px, transparent 4px) 100% 100%;

    background-repeat: no-repeat;
    background-size: 20px 20px;
  }
`;

