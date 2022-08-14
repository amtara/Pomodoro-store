import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get_all_order } from "../../api/command";
import { update_product } from "../../api/product";

// initial value to store product
const initialState = {
    status: 'idle',
    data: [],
    error: null
}

// update  product
export const getOrder = createAsyncThunk('listOrder', get_all_order)

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder

        // builder update product 
        .addCase(getOrder.pending, (state, {payload}) => {
            state.status = 'loading'
        })
        .addCase(getOrder.fulfilled, (state, {payload}) => {
            state.status = 'succeeded'
            state.data = payload
            state.error = null
        })
        .addCase(getOrder.rejected, (state, {error}) => {
            console.log('error product', error)
            state.status = 'failed'
            state.data = []
            state.error = error
        })
    }
})

// selector create new product 
export const orderSelector = (state) => state.order

export default orderSlice.reducer