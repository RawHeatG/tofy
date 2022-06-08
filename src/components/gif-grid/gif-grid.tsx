import { Gif, StyledGrid } from "./gif-grid.styles";
import { GifGridProps } from "./gif-grid.types";
import { useGifGrid } from "./use-gif-grid";

const GifGrid = ({ gifsResult: { data: gifs } }: GifGridProps) => {
  const { lastGifRef } = useGifGrid();
  return (
    <StyledGrid>
      {gifs.map((gif, index) =>
        index === gifs.length - 1 ? (
          <Gif
            key={gif.id}
            src={gif.images.downsized.url}
            alt={gif.title}
            ref={lastGifRef}
          />
        ) : (
          <Gif key={gif.id} src={gif.images.downsized.url} alt={gif.title} />
        )
      )}
    </StyledGrid>
  );
};

export { GifGrid };
