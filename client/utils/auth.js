// auth.js

import { api } from "./api.js";
import { STORAGE_KEYS } from "./constants.js";

export async function login(email, password) {
    const response = await api.post("/auth/login", { email, password });

    localStorage.setItem(STORAGE_KEYS.TOKEN, response.token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user));

    return response;
}

export async function register(userData) {
    return await api.post("/auth/register", userData);
}

export function logout() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    window.location.href = "/client/pages/auth/login.html";
}

export function getCurrentUser() {
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
    return !!localStorage.getItem(STORAGE_KEYS.TOKEN);
}
