import { fetchTrendingGifs, searchGifs } from "../../services/gifServices";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState: any = {
  status: "idle",
  gifs: [],
  error: null
};

export const getTrendingGifs = createAsyncThunk(
  "trending/getTrendingGifs",
  async () => {
    const response = await fetchTrendingGifs();
    console.log("trending response", response);
    return response.data;
  }
);

export const getGifs = createAsyncThunk(
  "trending/getGifs",
  async (query: string) => {
    const response = await searchGifs(query);
    console.log(response);
    return response.data;
  }
);

export const gifSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(getTrendingGifs.pending, getGifs.pending),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        isAnyOf(getTrendingGifs.fulfilled, getGifs.fulfilled),
        (state, action) => {
          state.gifs = action.payload;
          state.status = "fulfilled";
        }
      )
      .addMatcher(
        isAnyOf(getTrendingGifs.rejected, getGifs.rejected),
        (state, action) => {
          state.error = action.payload;
          state.status = "error";
        }
      );
  }
});

export default gifSlice.reducer;
