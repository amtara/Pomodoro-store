import axios from "axios";
import { authHeader } from "../utils/authHeader";

const BASE_URL = "http://localhost:5007/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: authHeader(),
});
