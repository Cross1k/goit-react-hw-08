import axios from "axios";

const connectionsInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  connectionsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  connectionsInstance.defaults.headers.common.Authorization = "";
};

export const fetchAllContacts = async () => {
  const { data } = await connectionsInstance.get("/contacts");
  return data;
};

export const addContact = async (values) => {
  const { data } = await connectionsInstance.post("/contacts", { ...values });
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await connectionsInstance.delete(`/contacts/${id}`);
  return data;
};

export const registrationUser = async (values) => {
  const { data } = await connectionsInstance.post("/users/signup", {
    ...values,
  });
  return data;
};

export const loginUser = async (values) => {
  const { data } = await connectionsInstance.post("/users/login", {
    ...values,
  });
  return data;
};

export const logoutUser = async () => {
  const { data } = await connectionsInstance.post(`/users/logout`);
  return data;
};

export const refreshUser = async () => {
  const { data } = await connectionsInstance.get(`/users/current`);
  return data;
};
