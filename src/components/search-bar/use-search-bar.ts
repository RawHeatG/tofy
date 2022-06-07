import { getTrendingGifs, getGifs } from "./../../features/gif/gifSlice";
import { useAppDispatch } from "./../../app/hooks";
import { useState } from "react";
import { useEffect } from "react";
const useSearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    query === "" ? dispatch(getTrendingGifs()) : dispatch(getGifs(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    query,
    setQuery
  };
};

export { useSearchBar };
