import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getGifs, getTrendingGifs } from "../../features/gif/gifSlice";
import { Search } from "./search-bar.styles";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    query === "" ? dispatch(getTrendingGifs()) : dispatch(getGifs(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <Search
      type="text"
      placeholder="Search Gifs..."
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export { SearchBar };
