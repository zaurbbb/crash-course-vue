import axios from "axios";
export const API_URL = "https://jsonplaceholder.typicode.com";
export const API = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

