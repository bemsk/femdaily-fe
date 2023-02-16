import { createSlice, nanoid } from "@reduxjs/toolkit";

import { fetchAsyncData } from "../data/data.slice";

const initialState = {
  entities: [],
  status: "idle", // idle, pending, succeeded, failed
  error: "",
};

const latestReviewsSlice = createSlice({
  name: "latestReviews",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncData.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchAsyncData.fulfilled, (state, action) => {
        const entities = action.payload[`latest review`];

        state.status = "succeeded";
        state.entities = entities.map(
          ({ user, profile, product: reviewedProduct, comment, star }) => {
            const id = nanoid();
            const reviewer = {
              picture: "",
              name: user,
              status: profile.join(", "),
            };
            const product = {
              name: reviewedProduct.name,
              image: reviewedProduct.image,
              description: reviewedProduct.desc,
            };
            const rating = star;
            const publishedAt = "2 hours ago";

            return {
              id,
              reviewer,
              comment,
              rating,
              product,
              publishedAt,
            };
          }
        );
      })
      .addCase(fetchAsyncData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default latestReviewsSlice.reducer;
