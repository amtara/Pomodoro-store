import { getProducts } from "../redux/admin/productSlice";
import { publicRequest, adminRequest } from "../utils/requestMethod";

/**
 * api create product db
 * @param {*} data
 * @returns response json
 */
export const add_product = async (data, { dispatch }) => {
  try {
    const resp = await adminRequest.post("products/", data);
    console.log("resp", resp);
    dispatch(getProducts());
    return resp.data;
  } catch (err) {
    console.log("err", err);
    return err.response;
  }
};

/**
 * api update product db
 * @param {*} data
 * @returns response json
 */
export const update_product = async (data) => {
  console.log("data", data);
  try {
    const resp = await adminRequest.put(`products/${data.id}`, data);
    console.log("resp update", resp);
    return resp.data;
  } catch (err) {
    console.log("err", err);
    return err.response;
  }
};

/**
 * api get all product db
 * @returns response json
 */
export const get_all_product = async () => {
  try {
    const resp = await publicRequest.get("products/");
    return resp.data;
  } catch (err) {
    return err.message;
  }
};

/**
 * api get all product db
 * @returns response string
 */
export const delete_product = async (productId, { dispatch }) => {
  try {
    const resp = await adminRequest.delete(`products/${productId}`);
    dispatch(getProducts());
    return resp.data;
  } catch (err) {
    return err.message;
  }
};
