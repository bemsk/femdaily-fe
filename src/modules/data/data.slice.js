import { createAsyncThunk } from "@reduxjs/toolkit";

const DATA_URL = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";

export const fetchAsyncData = createAsyncThunk(
  "data/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(DATA_URL, { signal: thunkAPI.signal });

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();

      return data;
    } catch (err) {
      return err;
    }
  }
);
