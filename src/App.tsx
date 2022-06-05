import "./App.css";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/theme";
import { Container } from "./App.styles";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { toggleTheme } from "./features/theme/themeSlice";

function App() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={themes[theme]}>
      <Container className="App">
        <button onClick={() => dispatch(toggleTheme())}>{theme}</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
