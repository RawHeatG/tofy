import styled from "styled-components";

export const StyledApp = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: all 0.3s ease;
  min-width: 100vw;
  min-height: 100vh;
`;

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
  background-color: ${(props) => props.theme.invertedBackground};
  color: ${(props) => props.theme.invertedColor};
`;
