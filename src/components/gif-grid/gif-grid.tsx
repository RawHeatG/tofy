import { GifCard, GifCardRef } from "../gif-card/gif-card";
import { StyledGrid } from "./gif-grid.styles";
import { GifGridProps } from "./gif-grid.types";
import { useGifGrid } from "./use-gif-grid";

const GifGrid = ({ gifsResult: { data: gifs } }: GifGridProps) => {
  const { lastGifRef } = useGifGrid();
  return (
    <StyledGrid>
      {gifs.map((gif, index) =>
        index === gifs.length - 1 ? (
          <GifCardRef gif={gif} ref={lastGifRef} />
        ) : (
          <GifCard gif={gif} />
        )
      )}
    </StyledGrid>
  );
};

export { GifGrid };
