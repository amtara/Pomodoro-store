import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { update_product } from "../../api/product";

// initial value to store product
const initialState = {
    update: {
        status: 'idle',
        data: {},
        error: null
    }
}

// update  product
export const updateProduct = createAsyncThunk('product_update/update', update_product)

const updateProductSlice = createSlice({
    name: 'product_update',
    initialState,
    reducers: {
        clearDataUpdateProduct(state){
            state.update.data = {}
        }
    },
    extraReducers(builder){
        builder

        // builder update product 
        .addCase(updateProduct.pending, (state, {payload}) => {
            state.update.status = 'loading'
        })
        .addCase(updateProduct.fulfilled, (state, {payload}) => {
            console.log('data product', payload)
            if(payload._id){
                state.update.status = 'succeeded'
                state.update.data = payload
                state.update.error = null
            }else{
                state.update.status = 'failed'
                state.update.error = "Ce produit existe deja"
            }
        })
        .addCase(updateProduct.rejected, (state, {error}) => {
            console.log('error product', error)
            state.update.status = 'failed'
            state.update.data = []
            state.update.error = error
        })
    }
})

export const { clearDataUpdateProduct } = updateProductSlice.actions

// selector create new product 
export const productUpdateSelector = (state) => state.updateProduct.update

export default updateProductSlice.reducer