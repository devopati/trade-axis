import axios from "axios";

// export const BACKEND_URL = "http://192.168.0.11:3000/api/tradeaxis/";
// export const SOCKET_URL = "http://192.168.0.11:3000";
export const BACKEND_URL =
  "https://tradeorbit-server.onrender.com/api/tradeaxis/";
export const SOCKET_URL = "https://tradeorbit-server.onrender.com";

export const API = axios.create({
  baseURL: BACKEND_URL,
});
