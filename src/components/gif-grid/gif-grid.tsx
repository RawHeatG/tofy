import { Gif, StyledGrid } from "./gif-grid.styles";
import { GifGridProps } from "./gif-grid.types";

const GifGrid = ({ gifs }: GifGridProps) => {
  return (
    <StyledGrid>
      {gifs.map((gif) => {
        return (
          <Gif
            key={gif.id}
            src={gif.images.downsized.url}
            alt={gif.title}
            loading="lazy"
          />
        );
      })}
    </StyledGrid>
  );
};

export { GifGrid };
