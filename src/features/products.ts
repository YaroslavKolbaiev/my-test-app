import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {productsList} from "../api/productsList";
import { Product } from "../types/Product";

type ProductsState = {
  products: Product[];
}

const initialState: ProductsState = {
  products: productsList
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    take: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(good => good.name !== action.payload);
    },
    clear: (state) => {
      state.products = []
    },
  }
});

export const { actions } = productsSlice;
export default productsSlice.reducer;
