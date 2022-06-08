import { ThemeProvider } from "styled-components";
import { themes } from "./styles/theme";
import { StyledApp } from "./App.styles";
import { useAppSelector } from "./app/hooks";
import { GlobalStyles } from "./components/global-styles/globalStyles.styles";
import { Tofy } from "./components";

function App() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <StyledApp>
        <Tofy />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
