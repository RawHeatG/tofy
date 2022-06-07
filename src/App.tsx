import { ThemeProvider } from "styled-components";
import { themes } from "./styles/theme";
import { StyledApp, ThemeToggleButton } from "./App.styles";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { toggleTheme } from "./features/theme/themeSlice";

function App() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledApp>
        <ThemeToggleButton onClick={() => dispatch(toggleTheme())}>
          {theme}
        </ThemeToggleButton>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
