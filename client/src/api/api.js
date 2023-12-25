// importing axios
import axios from "axios";

//importing constants for api base url and endpoints
import { API_BASE_URL, API_ENDPOINTS } from '../utils/constants';

// creating an instance of axios with baseURL
const API = axios.create({
    baseURL: API_BASE_URL,
    // timeout: 5000, // Timeout for requests in milliseconds
    headers: {
        'Content-Type': 'application/json', // Default content type for requests
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Default authorization header
    },
})

// exporting function with api get/post requests and customized parameters
export const signin = (inputs) => API.post(`${API_ENDPOINTS.signup}`, inputs);
export const login = (inputs) => API.post(`${API_ENDPOINTS.login}`, inputs);
export const addnewproduct = (formData) => API.post(`${API_ENDPOINTS.addnewproduct}`, formData, {headers: {
    'Content-Type': 'multipart'
}})
