// necessary constants
export const API_BASE_URL = process.env.NODE_ENV === 'development'
    ? "http://localhost:4000/api"
    : "https://menhew-server.onrender.com/";

export const API_ENDPOINTS = {
    signup: "/auth/signup",
    login: "/auth/login",
}