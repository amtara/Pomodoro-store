import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import productReducer from "../redux/admin/productSlice";
import authReducer from "../redux/authSlice";
import updateProductReducer from "../redux/admin/updateProductSlice";
import deleteProductReducer from "../redux/admin/DeleteProductSlice";
import orderReducer from "../redux/admin/commandSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  auth: authReducer,
  updateProduct: updateProductReducer,
  deleteProduct: deleteProductReducer,
  order: orderReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);
