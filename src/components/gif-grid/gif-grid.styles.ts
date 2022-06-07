import styled from "styled-components";

export const StyledGrid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`;

export const Gif = styled.img`
  border-radius: 0.75rem;
  max-width: 100%;
  height: auto;
`;
