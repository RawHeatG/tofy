import { getGifs } from "./../../features/gif/gifSlice";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./../../app/hooks";
import { toggleTheme } from "../../features/theme/themeSlice";
const useTofy = () => {
  const {
    gif: { status, gifsResult, additionalGifsStatus },
    theme: { value }
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const themeHandler = () => dispatch(toggleTheme());
  useEffect(() => {
    (async () => {
      dispatch(getGifs(0));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    status,
    gifsResult,
    additionalGifsStatus,
    theme: value,
    themeHandler
  };
};

export { useTofy };
