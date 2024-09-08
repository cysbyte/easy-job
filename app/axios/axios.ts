import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';


export let BASE_ENDPOINT = '';

// when developing locally, change this value to local
export const APP_ENVIRONMENT: string = 'development';

if (APP_ENVIRONMENT === 'local') {
  BASE_ENDPOINT = 'http://localhost:5000';
} else if (APP_ENVIRONMENT === 'development') {
  BASE_ENDPOINT = 'http://139.159.153.143:38080';
} else if (APP_ENVIRONMENT === 'staging') {
  BASE_ENDPOINT = 'http://139.159.153.143:38080';
} else if (APP_ENVIRONMENT === 'production') {
  BASE_ENDPOINT = 'http://139.159.153.143:38080';
}

const BASE_URL = `${BASE_ENDPOINT}`;

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,

    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    withCredentials: true
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token'); 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle successful response
        return response;
    },
    (error: AxiosError) => {
        // Handle response error
        if (error.response?.status === 401) {
            // Handle unauthorized error (e.g., redirect to login page)
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;