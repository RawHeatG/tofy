import { IGif } from "@giphy/js-types";
import { segregateGifs } from "../../utils/utils";
import { GifCard, GifCardRef } from "../gif-card/gif-card";
import { StyledGrid } from "./gif-grid.styles";
import { GifGridProps } from "./gif-grid.types";
import { useGifGrid } from "./use-gif-grid";

const GifGrid = ({ gifsResult: { data: gifs } }: GifGridProps) => {
  const { lastGifRef, column } = useGifGrid();
  return (
    <StyledGrid>
      {segregateGifs(gifs, column).map((gifs: IGif[], index: number) => (
        <div>
          {gifs.map((gif, innerIndex) =>
            index === column - 1 && innerIndex === gifs.length - 1 ? (
              <GifCardRef key={gif.id} gif={gif} ref={lastGifRef} />
            ) : (
              <GifCard key={gif.id} gif={gif} />
            )
          )}
        </div>
      ))}
    </StyledGrid>
  );
};

export { GifGrid };
