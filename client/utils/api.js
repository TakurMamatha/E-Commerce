// api.js

import { BASE_URL, STORAGE_KEYS } from "./constants.js";

function getToken() {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
}

async function request(endpoint, method = "GET", data = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        }
    };

    const token = getToken();
    if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error("API request failed");
    }

    return response.json();
}

export const api = {
    get: (endpoint) => request(endpoint, "GET"),
    post: (endpoint, data) => request(endpoint, "POST", data),
    put: (endpoint, data) => request(endpoint, "PUT", data),
    delete: (endpoint) => request(endpoint, "DELETE")
};
