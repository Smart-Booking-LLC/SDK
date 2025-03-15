import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://api.yourchannelmanager.com';
const API_KEY = 'your-api-key'; // This should ideally be configurable

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${API_KEY}` }
});

export const makeRequest = async <T>(
    method: 'get' | 'post' | 'put' | 'delete',
    endpoint: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
): Promise<T> => {
    try {
        const response = await apiClient({
            method,
            url: endpoint,
            data,
            ...config
        });
        return response.data;
    } catch (error) {
        throw new Error(`API Request failed: ${error}`);
    }
};
