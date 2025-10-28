import { apiFetch } from "./client";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginData {
  email: string;
  password: string;
}

export async function register(userData: RegisterData) {
  return apiFetch("/auth/register", {
    method: "POST",
    data: JSON.stringify(userData),
  });
}

export async function login(credentials: LoginData) {
  const response = await apiFetch<{ token: string }>("/auth/login", {
    method: "POST",
    data: JSON.stringify(credentials),
  });

  if (typeof window !== "undefined") {
    localStorage.setItem("token", response.data.token);
  }

  return response;
}

export async function getProfile() {
  return apiFetch("/auth/me");
}

export function logout() {
  if (typeof window !== "undefined") localStorage.removeItem("token");
}
