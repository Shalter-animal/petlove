import axios from "axios";

export const apiFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_GOIT,
  headers: { "Content-Type": "application/json" },
});

apiFetch.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
