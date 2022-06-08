import { ThemeToggleButton } from "./tofy.styles";
import { SearchBar } from "../search-bar/search-bar";
import { Status } from "../../features/gif/gifSlice.types";
import { GifGrid } from "../gif-grid/gif-grid";
import { useTofy } from "./use-tofy";

const Tofy = () => {
  const { status, gifsResult, additionalGifsStatus, theme, themeHandler } =
    useTofy();
  return (
    <>
      <SearchBar />
      <ThemeToggleButton onClick={themeHandler}>{theme}</ThemeToggleButton>
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
      {additionalGifsStatus === Status.loading &&
        gifsResult?.data?.length !== 0 && <h1>Loading more gifs...</h1>}
    </>
  );
};

export { Tofy };
