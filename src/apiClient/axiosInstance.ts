import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_URL } from "./constants/endpoints";

/**
 * Generates a custom axios instance to be persisted in memory.
 * This will allow us to use interceptors or custom headers without
 * the need to add them by request
 */
const createInstance = (config?: AxiosRequestConfig): AxiosInstance =>
  axios.create({
    ...config,
    baseURL: BASE_URL,
    headers: {
      ...config?.headers,
      'Content-Type': 'application/json'
    },
  });

/**
 * Axios HTTP client
 */
export const http = createInstance();
