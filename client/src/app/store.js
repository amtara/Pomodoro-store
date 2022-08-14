import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import productReducer from "../redux/admin/productSlice";
import authReducer from "../redux/authSlice";
import updateProductReducer from "../redux/admin/updateProductSlice";
import deleteProductReducer from "../redux/admin/DeleteProductSlice";
import orderReducer from '../redux/admin/commandSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    auth: authReducer,
    updateProduct: updateProductReducer,
    deleteProduct: deleteProductReducer,
    order: orderReducer
  },
});
