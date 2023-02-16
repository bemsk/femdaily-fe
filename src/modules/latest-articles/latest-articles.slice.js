import { createSlice, nanoid } from "@reduxjs/toolkit";

import { fetchAsyncData } from "../data/data.slice";

const initialState = {
  entities: [],
  status: "idle", // idle, pending, succeeded, failed
  error: "",
};

const latestArticlesSlice = createSlice({
  name: "latestArticles",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncData.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchAsyncData.fulfilled, (state, action) => {
        const entities = action.payload[`latest articles`];

        state.status = "succeeded";
        state.entities = entities.map(
          ({ title, author, image, published_at }) => ({
            id: nanoid(),
            title,
            author,
            image,
            publishedAt: published_at,
          })
        );
      })
      .addCase(fetchAsyncData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default latestArticlesSlice.reducer;
