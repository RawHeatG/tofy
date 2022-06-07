import styled from "styled-components";

export const Search = styled.input`
  padding: 0.5rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.invertedBackground};
  color: ${(props) => props.theme.invertedColor};
  border-radius: 4px;
  font-size: large;
`;
