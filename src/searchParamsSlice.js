import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      animal: "",
      location: "",
      breed: "",
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;