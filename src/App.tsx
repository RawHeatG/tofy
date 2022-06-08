import { ThemeProvider } from "styled-components";
import { themes } from "./styles/theme";
import { StyledApp, ThemeToggleButton } from "./App.styles";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { toggleTheme } from "./features/theme/themeSlice";
import { useEffect } from "react";
import { GifGrid } from "./components/gif-grid/gif-grid";
import { getGifs } from "./features/gif/gifSlice";
import { SearchBar } from "./components/search-bar/search-bar";
import { GlobalStyles } from "./components/global-styles/globalStyles.styles";

function App() {
  const theme = useAppSelector((state) => state.theme.value);
  const { status, gifsResult } = useAppSelector((state) => state.gif);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(getGifs(0));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <StyledApp>
        <SearchBar />
        <ThemeToggleButton onClick={() => dispatch(toggleTheme())}>
          {theme}
        </ThemeToggleButton>
        {status === "fulfilled" && gifsResult ? (
          gifsResult.data?.length === 0 ? (
            <h1>No videos found :(</h1>
          ) : (
            <GifGrid gifsResult={gifsResult} />
          )
        ) : status === "loading" ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Error Occured :(</h1>
        )}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
