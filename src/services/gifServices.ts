import { GiphyFetch } from "@giphy/js-fetch-api";
const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY as string);

export const fetchTrendingGifs = async () => await gf.trending();

export const searchGifs = async (query: string) => await gf.search(query);
