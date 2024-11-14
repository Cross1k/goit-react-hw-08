import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchAllContacts,
} from "../../api/apiContacts";

export const apiFetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await fetchAllContacts(_);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiAddContactToList = createAsyncThunk(
  "contacts/addContact",
  async (value, thunkAPI) => {
    try {
      const data = await addContact(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
