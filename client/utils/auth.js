// // auth.js

// import { api } from "./api.js";
// import { STORAGE_KEYS } from "./constants.js";

// export async function login(email, password) {
//     const response = await api.post("/auth/login", { email, password });

//     localStorage.setItem(STORAGE_KEYS.TOKEN, response.token);
//     localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user));

//     return response;
// }

// export async function register(userData) {
//     return await api.post("/auth/register", userData);
// }

// export function logout() {
//     localStorage.removeItem(STORAGE_KEYS.TOKEN);
//     localStorage.removeItem(STORAGE_KEYS.USER);
//     window.location.href = "/client/pages/auth/login.html";
// }

// export function getCurrentUser() {
//     const user = localStorage.getItem(STORAGE_KEYS.USER);
//     return user ? JSON.parse(user) : null;
// }

// export function isAuthenticated() {
//     return !!localStorage.getItem(STORAGE_KEYS.TOKEN);
// }
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        // localStorage.setItem("token", data.token);
          localStorage.setItem("token", data.token);
localStorage.setItem("userInfo", JSON.stringify(data));

        // redirect to home page
        window.location.href = "../user/home.html";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  });
}
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  window.location.href = "../auth/login.html";
}


