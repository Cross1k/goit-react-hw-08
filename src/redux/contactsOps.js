import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiAddContact,
  apiDeleteContact,
  apiFetchAllContacts,
} from "../api/apiContacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await apiFetchAllContacts(_);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactToList = createAsyncThunk(
  "contacts/addContact",
  async (value, thunkAPI) => {
    try {
      const data = await apiAddContact(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const data = await apiDeleteContact(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
