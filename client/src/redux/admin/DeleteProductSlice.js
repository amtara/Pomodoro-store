import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delete_product } from "../../api/product";

// initial value to store product
const initialState = {
    status: 'idle',
    data: null,
    error: null
}

// update  product
export const deleteProduct = createAsyncThunk('product_delete/delete', delete_product)

const deleteProductSlice = createSlice({
    name: 'product_delete',
    initialState,
    reducers: {
        clearDeleteData(state){
            state.data = ""
        }
    },
    extraReducers(builder){
        builder

        // builder update product 
        .addCase(deleteProduct.pending, (state, {payload}) => {
            state.status = 'loading'
        })
        .addCase(deleteProduct.fulfilled, (state, {payload}) => {
            console.log('data delete product', payload)
            
            state.status = 'succeeded'
            state.data = payload
            state.error = null
            
        })
        .addCase(deleteProduct.rejected, (state, {error}) => {
            console.log('error product', error)
            state.status = 'failed'
            state.data = null
            state.error = error
        })
    }
})

export const { clearDeleteData } = deleteProductSlice.actions

// selector create new product 
export const productDeleteSelector = (state) => state.deleteProduct

export default deleteProductSlice.reducer