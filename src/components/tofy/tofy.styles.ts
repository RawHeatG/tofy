import styled from "styled-components";

export const ThemeToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 10;
  border-radius: 4px;
  border: none;
  font-size: large;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.invertedBackground};
  color: ${({ theme }) => theme.invertedColor};
`;
