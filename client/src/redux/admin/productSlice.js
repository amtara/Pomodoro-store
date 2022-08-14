import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add_product, get_all_product } from "../../api/product";

const initialState = {
  productList: {
    status: "idle",
    data: [],
    error: null,
  },
  create: {
    status: "idle",
    data: {},
    error: null,
  },
};

// get all product to db
export const getProducts = createAsyncThunk("product/getAll", get_all_product);

// create new product
export const addNewProduct = createAsyncThunk("product/create", add_product);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearDataAddProduct(state) {
      state.create.data = {};
    },
  },
  extraReducers(builder) {
    builder

      // builder get product
      .addCase(getProducts.pending, (state, { payload }) => {
        state.productList.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.productList.status = "succeeded";
        state.productList.data = payload;
        state.productList.error = null;
      })
      .addCase(getProducts.rejected, (state, { error }) => {
        state.productList.status = "failed";
        state.productList.data = [];
        state.productList.error = error;
      })

      // builder create new product
      .addCase(addNewProduct.pending, (state, { payload }) => {
        state.create.status = "loading";
      })
      .addCase(addNewProduct.fulfilled, (state, { payload }) => {
        console.log("data product", payload);
        if (payload._id) {
          state.create.status = "succeeded";
          state.create.data = payload;
          state.create.error = null;
        } else {
          state.create.status = "failed";
          state.create.error = "Ce produit existe deja";
        }
      })
      .addCase(addNewProduct.rejected, (state, { error }) => {
        console.log("error product", error);
        state.create.status = "failed";
        state.create.data = [];
        state.create.error = error;
      });
  },
});

export const { clearDataAddProduct } = productSlice.actions;

// selector get all product
export const productListSelector = (state) => state.product.productList;

// selector create new product
export const productCreateSelector = (state) => state.product.create;

export default productSlice.reducer;
