import { GifSLiceInitialState, Status } from "./gifSlice.types";
import { fetchTrendingGifs, searchGifs } from "../../services/gifServices";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState: GifSLiceInitialState = {
  status: Status.idle,
  additionalGifsStatus: Status.idle,
  gifsResult: null,
  error: null,
  prevOffset: 10,
  query: "",
  hasMoreGifs: true
};

export const getGifs = createAsyncThunk(
  "gifs/getGifs",
  async (offset: number, thunkAPI) => {
    const {
      gif: { query }
    } = thunkAPI.getState() as RootState;
    return (await query) === ""
      ? fetchTrendingGifs(offset)
      : searchGifs(query, offset);
  }
);

export const getMoreGifs = createAsyncThunk(
  "gifs/getMoreGifs",
  async (_, thunkAPI) => {
    const {
      gif: { query, prevOffset }
    } = thunkAPI.getState() as RootState;
    return (await query) === ""
      ? fetchTrendingGifs(prevOffset)
      : searchGifs(query, prevOffset);
  }
);

export const gifSlice = createSlice({
  name: "gif",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    resetOffset: (state) => {
      state.prevOffset = 10;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoreGifs.fulfilled, (state, action) => {
        state.gifsResult =
          state.gifsResult !== null
            ? {
                ...action.payload,
                data: [...state?.gifsResult?.data, ...action.payload.data]
              }
            : action.payload;
        state.prevOffset = action.payload.pagination.offset + 10;
        state.status = Status.fulfilled;
        state.hasMoreGifs =
          action.payload.pagination.total_count > state.prevOffset;
      })
      .addCase(getMoreGifs.pending, (state) => {
        state.additionalGifsStatus = Status.loading;
      })
      .addCase(getGifs.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(getGifs.fulfilled, (state, action) => {
        state.gifsResult = action.payload;
        state.status = Status.fulfilled;
        state.hasMoreGifs =
          action.payload.pagination.total_count > state.prevOffset;
        state.prevOffset = action.payload.pagination.offset + 10;
      })
      .addMatcher(
        isAnyOf(getGifs.rejected, getMoreGifs.rejected),
        (state, action) => {
          state.error = action.payload;
          state.status = Status.error;
        }
      );
  }
});

export const { resetOffset, setQuery } = gifSlice.actions;

export default gifSlice.reducer;
