import { GiphyFetch } from "@giphy/js-fetch-api";
const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY as string);
const gifLimit = 10;
export const fetchTrendingGifs = async (offset: number) =>
  await gf.trending({ limit: gifLimit, offset });

export const searchGifs = async (query: string, offset: number) =>
  await gf.search(query, { limit: gifLimit, offset });
