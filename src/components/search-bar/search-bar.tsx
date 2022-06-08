import { Search } from "./search-bar.styles";
import { useSearchBar } from "./use-search-bar";

const SearchBar = () => {
  const { query, updateQuery } = useSearchBar();
  return (
    <Search
      type="text"
      placeholder="Search Gifs...🔍"
      value={query}
      onChange={(event) => updateQuery(event.target.value)}
    />
  );
};

export { SearchBar };
