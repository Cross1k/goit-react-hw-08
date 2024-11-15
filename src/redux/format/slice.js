import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { screenWidth: false };

const formatSlice = createSlice({
  name: "format",
  initialState: INITIAL_STATE,
  reducers: {
    formatScreen: (state, action) => {
      state.screenWidth = action.payload;
    },
  },
});

export const formatReducer = formatSlice.reducer;
export const { formatScreen } = formatSlice.actions;
