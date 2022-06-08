import { useAppSelector } from "./../../app/hooks";
import { getMoreGifs } from "./../../features/gif/gifSlice";
import { useCallback, useRef } from "react";
import { useAppDispatch } from "../../app/hooks";

const useGifGrid = () => {
  const { prevOffset, hasMoreGifs } = useAppSelector((state) => state.gif);
  const dispatch = useAppDispatch();

  const observer = useRef<IntersectionObserver>();
  observer.current && observer?.current?.disconnect();
  const config = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };
  const lastGifRef = useCallback(
    (node: any) => {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          hasMoreGifs && dispatch(getMoreGifs());
        }
      }, config);
      node && observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, prevOffset]
  );

  return {
    lastGifRef
  };
};

export { useGifGrid };
