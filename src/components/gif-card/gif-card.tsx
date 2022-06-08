import React, { useState } from "react";
import { Gif } from "./gif-card.styles";
import { GifCardProps } from "./gif-card.types";

const GifCard = ({ gif }: GifCardProps) => {
  const stillUrl = gif.images.fixed_width_still.url;
  const url = gif.images.fixed_width.url;
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const togglePlay = () => setIsPlay(!isPlay);
  return (
    <Gif
      key={gif.id}
      src={isPlay ? url : stillUrl}
      alt={gif.title}
      onClick={togglePlay}
    />
  );
};

const GifCardRef = React.forwardRef(({ gif }: GifCardProps, ref: any) => {
  const stillUrl = gif.images.fixed_width_still.url;
  const url = gif.images.fixed_width.url;
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const togglePlay = () => setIsPlay(!isPlay);
  return (
    <Gif
      key={gif.id}
      src={isPlay ? url : stillUrl}
      alt={gif.title}
      onClick={togglePlay}
      ref={ref}
    />
  );
});

export { GifCard, GifCardRef };
