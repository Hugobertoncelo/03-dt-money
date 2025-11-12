import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-api-072m.onrender.com",
});
