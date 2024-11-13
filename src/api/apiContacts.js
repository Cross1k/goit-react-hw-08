import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://672a3789976a834dd0229791.mockapi.io/contacts",
});

export const apiFetchAllContacts = async () => {
  const { data } = await contactsInstance.get("/");
  return data;
};

export const apiAddContact = async (values) => {
  const { data } = await contactsInstance.post("/", { ...values });
  return data;
};

export const apiDeleteContact = async (id) => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
