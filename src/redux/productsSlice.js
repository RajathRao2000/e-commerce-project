import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { products: {products:[]} },
  reducers: {
    updateProductList(state, action) {
      state.products = action.payload;
    },
  },
});

export const productAction = productSlice.actions;

export default productSlice.reducer;
