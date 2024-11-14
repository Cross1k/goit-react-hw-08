import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearToken,
  loginUser,
  logoutUser,
  refreshUser,
  registrationUser,
  setToken,
} from "../../api/apiContacts";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const data = await registrationUser(formData);
      setToken(data.token);
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const data = await loginUser(formData);
      setToken(data.token);
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkApi.rejectWithValue("No token provided to refresh user data");
    }

    try {
      setToken(token);
      const data = await refreshUser();
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      const data = await logoutUser(_);
      clearToken();
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
