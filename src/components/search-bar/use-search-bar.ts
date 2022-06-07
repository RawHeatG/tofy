import { getTrendingGifs, getGifs } from "./../../features/gif/gifSlice";
import { useAppDispatch } from "./../../app/hooks";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { getDebouncedFunc } from "../../utils/utils";
const useSearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const dispatchGifs = (query: string) =>
    query === "" ? dispatch(getTrendingGifs()) : dispatch(getGifs(query));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedDispatchGifs = useCallback(
    getDebouncedFunc(dispatchGifs, 500),
    []
  );

  useEffect(() => {
    debouncedDispatchGifs(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    query,
    setQuery
  };
};

export { useSearchBar };
