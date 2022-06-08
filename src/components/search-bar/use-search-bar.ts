import { getGifs, resetOffset, setQuery } from "./../../features/gif/gifSlice";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { useCallback } from "react";
import { useEffect } from "react";
import { getDebouncedFunc } from "../../utils/utils";
const useSearchBar = () => {
  const { query } = useAppSelector((state) => state.gif);
  const dispatch = useAppDispatch();

  const updateQuery = (query: string) => {
    dispatch(setQuery(query));
    dispatch(resetOffset());
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetGifs = useCallback(
    getDebouncedFunc(() => dispatch(getGifs(0)), 500),
    []
  );

  useEffect(() => {
    debouncedGetGifs(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    query,
    updateQuery
  };
};

export { useSearchBar };
