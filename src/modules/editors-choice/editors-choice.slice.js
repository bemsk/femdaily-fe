import { createSlice, nanoid } from "@reduxjs/toolkit";

import { fetchAsyncData } from "../data/data.slice";

const initialState = {
  entities: [],
  status: "idle", // idle, pending, succeeded, failed
  error: "",
};

const editorsChoiceSlice = createSlice({
  name: "editorsChoice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncData.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchAsyncData.fulfilled, (state, action) => {
        const entities = action.payload[`editor's choice`];

        state.status = "succeeded";
        state.entities = entities.map(({ editor: name, role, product }) => {
          const id = nanoid();
          const editor = { name: name, role: role };

          return { id, editor, product };
        });
      })
      .addCase(fetchAsyncData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default editorsChoiceSlice.reducer;
