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
import { Status } from "./features/gif/gifSlice.types";

function App() {
  const theme = useAppSelector((state) => state.theme.value);
  const { status, gifsResult, additionalGifsStatus } = useAppSelector(
    (state) => state.gif
  );
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
        {status === Status.fulfilled && gifsResult ? (
          gifsResult.data?.length === 0 ? (
            //putting these headers as a cheap loader :')
            <h1>No videos found :(</h1>
          ) : (
            <GifGrid gifsResult={gifsResult} />
          )
        ) : status === Status.loading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Error Occured :(</h1>
        )}
        {additionalGifsStatus === Status.loading && (
          <h1>Loading more gifs...</h1>
        )}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
