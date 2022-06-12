import { GifsResult } from "@giphy/js-fetch-api";

export enum Status {
  idle = "idle",
  loading = "loading",
  fulfilled = "fulfilled",
  error = "error"
}

export type GifSLiceInitialState = {
  status: Status;
  additionalGifsStatus: Status;
  gifsResult: GifsResult | null;
  error: any;
  prevOffset: number;
  query: string;
  hasMoreGifs: boolean;
  column: number;
};
