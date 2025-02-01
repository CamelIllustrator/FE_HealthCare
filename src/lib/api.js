import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

// Fungsi untuk login
export const login = async (credentials) => {
  try {
    const response = await api.post(
      import.meta.env.VITE_API_LOGIN,
      credentials
    );
    return response.data;
  } catch (error) {
    throw error.response?.data;
  }
};

// Fungsi untuk register parent
export const registerParent = async (userData) => {
  try {
    const response = await api.post(
      import.meta.env.VITE_API_REGISTER_PARENT,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data;
  }
};

// Fungsi untuk register institution
export const registerInstitution = async (userData) => {
  try {
    const response = await api.post(
      import.meta.env.VITE_API_REGISTER_INSTITUTION,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export default api;
