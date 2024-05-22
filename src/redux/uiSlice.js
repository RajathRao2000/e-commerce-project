import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showCategory: false,
    showCart: false,
    showMainMenu: false,
  },
  reducers: {
    setShowCategory(state, action) {
      state.showCategory = action.payload;
    },
    setShowCart(state, action) {
      state.showCart = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
