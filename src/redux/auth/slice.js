import { createSlice } from "@reduxjs/toolkit";
import {
  apiGetCurrentUser,
  apiLoginUser,
  apiLogoutUser,
  apiRegisterUser,
} from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiGetCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(apiGetCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(apiGetCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      // .addCase(apiLogoutUser.pending, () => {})
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      }),
  // .addCase(apiLogoutUser.rejected, () => {}),
});

export const authReducer = authSlice.reducer;
