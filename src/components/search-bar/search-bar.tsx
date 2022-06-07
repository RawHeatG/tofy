import { Search } from "./search-bar.styles";
import { useSearchBar } from "./use-search-bar";

const SearchBar = () => {
  const { query, setQuery } = useSearchBar();
  return (
    <Search
      type="text"
      placeholder="Search Gifs..."
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export { SearchBar };
