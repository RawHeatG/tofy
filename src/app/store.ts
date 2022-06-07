import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import gifReducer from "../features/gif/gifSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    gif: gifReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
