import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";export const fetchAllProducts = createAsyncThunk(    'products/fetchProducts',    async () => {        const response = await fetch('http://localhost:3000/products');        return await response.json();    });const productSlice = createSlice({    name: 'products',    initialState: {        status: null,    },    reducers: {    },    extraReducers: (builder) => {        builder            .addCase(fetchAllProducts.pending, (state) => {                state.status = 'loading'            })            .addCase(fetchAllProducts.fulfilled, (state, action) => {                state.status = 'idle'                state.productsAll  = action.payload            })    },})export const {} = productSlice.actionsexport default productSlice.reducer;