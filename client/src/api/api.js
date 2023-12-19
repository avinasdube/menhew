// importing axios
import axios from "axios";

//importing constants for api base url and endpoints
import { API_BASE_URL, API_ENDPOINTS } from '../utils/constants';

// creating an instance of axios with baseURL
const API = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000, // Timeout for requests in milliseconds
    headers: {
        'Content-Type': 'application/json', // Default content type for requests
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Default authorization header
    },
})

// exporting function with api get/post requests and customized parameters
// export const signUp = (inputs) => API.post(`${API_ENDPOINTS.signup}`, inputs);

export const signUp = (inputs) => {
    // Initialize loading, error, and response status
    let loading = true;
    let error = null;
    let status = null;

    // Create a promise to handle the asynchronous nature of the request
    const promise = new Promise((resolve, reject) => {
        API.post(`${API_ENDPOINTS.signup}`, inputs)
            .then(response => {
                // If the request is successful, set the status and resolve the promise
                status = response.status;
                loading = false; // Update loading state when the request is complete
                resolve({ loading, error: null, status, response: response.data });
            })
            .catch(err => {
                // If there is an error, set the status and reject the promise with the error
                status = err.response ? err.response.status : null;
                loading = false; // Update loading state when the request is complete
                reject({ loading, error: err, status, response: null });
            });
    });

    // Return the promise along with initial loading, error, and response status
    return { loading, error, status, promise };
};
