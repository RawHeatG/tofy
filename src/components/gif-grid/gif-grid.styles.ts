import styled from "styled-components";

export const StyledGrid = styled.div<{ column: number }>`
  padding: 0.25rem 1rem;
  display: grid;
  grid-template-columns: repeat(${({ column }) => column}, 1fr);
  grid-gap: 10px;
`;

export const StyledColumn = styled.div``;
