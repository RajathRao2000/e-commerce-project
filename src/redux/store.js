import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./authSlice";
import cartreducer from "./cartSlice";
import productsreducer from "./productsSlice";
import uireducer from "./uiSlice";

const store = configureStore({
  reducer: {
    auth: authreducer,
    cart: cartreducer,
    product: productsreducer,
    ui: uireducer,
  },
});

export default store;
