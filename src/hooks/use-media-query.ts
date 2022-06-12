import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { setColumn } from "../features/gif/gifSlice";

const useMediaQuery = () => {
  const dispatch = useAppDispatch();
  const mobile = "(max-width: 480px)";
  const tablet = "(max-width: 601px)";
  const desktop = "(max-width: 901px)";
  const bigDesktop = "(max-width: 1201px)";
  const mobileMediaQuery = window.matchMedia(mobile);
  const tabletMediaQuery = window.matchMedia(tablet);
  const desktopMediaQuery = window.matchMedia(desktop);
  const bigDesktopMediaQuery = window.matchMedia(bigDesktop);

  useEffect(() => {
    mobileMediaQuery?.addListener(() => dispatch(setColumn(1)));
    tabletMediaQuery?.addListener(() => dispatch(setColumn(2)));
    desktopMediaQuery?.addListener(() => dispatch(setColumn(3)));
    bigDesktopMediaQuery?.addListener(() => dispatch(setColumn(4)));
    return () => {
      mobileMediaQuery.removeListener(() => dispatch(setColumn(1)));
      tabletMediaQuery?.removeListener(() => dispatch(setColumn(2)));
      desktopMediaQuery?.removeListener(() => dispatch(setColumn(3)));
      bigDesktopMediaQuery?.removeListener(() => dispatch(setColumn(4)));
    };
  }, [
    bigDesktopMediaQuery,
    desktopMediaQuery,
    dispatch,
    mobileMediaQuery,
    tabletMediaQuery
  ]);

  return 1;
};

export { useMediaQuery };
