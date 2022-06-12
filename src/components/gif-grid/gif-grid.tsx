import { IGif } from "@giphy/js-types";
import { segregateGifs } from "../../utils/utils";
import { GifCard, GifCardRef } from "../gif-card/gif-card";
import { StyledColumn, StyledGrid } from "./gif-grid.styles";
import { GifGridProps } from "./gif-grid.types";
import { useGifGrid } from "./use-gif-grid";

const GifGrid = ({ gifsResult: { data: gifs } }: GifGridProps) => {
  const { lastGifRef, column } = useGifGrid();
  return (
    <StyledGrid column={column}>
      {segregateGifs(gifs, column).map((gifs: IGif[], index: number) => (
        <StyledColumn key={index}>
          {gifs.map((gif, innerIndex) =>
            index === column - 1 && innerIndex === gifs.length - 1 ? (
              <GifCardRef key={gif.id} gif={gif} ref={lastGifRef} />
            ) : (
              <GifCard key={gif.id} gif={gif} />
            )
          )}
        </StyledColumn>
      ))}
    </StyledGrid>
  );
};

export { GifGrid };
