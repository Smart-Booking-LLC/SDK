import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = '';    
const API_KEY = 'your-api-key'; // 

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${API_KEY}` }
});

export { apiClient, API_KEY, BASE_URL };
