import axios from "axios";
import { publicRequest } from "../utils/requestMethod";

/**
 * api authenfication user to db
 * @param {*} data
 * @returns response infos user
 */
export const login = async (data) => {
  try {
    const resp = await publicRequest.post("auth/login", data);
    return resp;
  } catch (err) {
    return err.response;
  }
};

/**
 * api create new user db
 * @param {*} data
 * @returns response infos user
 */
export const register = async (data) => {
  try {
    const resp = await publicRequest.post("auth/register", data);
    return resp.data;
  } catch (err) {
    return err.message;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
  dispatchEvent(new Event("storage"));
};
