import { ThemeProvider } from "styled-components";
import { themes } from "./styles/theme";
import { StyledApp, ThemeToggleButton } from "./App.styles";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { toggleTheme } from "./features/theme/themeSlice";
import { useEffect } from "react";
import { GifGrid } from "./components/gif-grid/gif-grid";
import { getTrendingGifs } from "./features/gif/gifSlice";

function App() {
  const theme = useAppSelector((state) => state.theme.value);
  const { status, gifs } = useAppSelector((state) => state.gif);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(getTrendingGifs());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledApp>
        <ThemeToggleButton onClick={() => dispatch(toggleTheme())}>
          {theme}
        </ThemeToggleButton>
        {status === "fulfilled" ? <GifGrid gifs={gifs} /> : <h1>Loading...</h1>}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
