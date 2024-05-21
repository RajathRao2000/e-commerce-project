import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartlist: [],
    quantity: 0,
    total_price: 0,
  },
  reducers: {
    AddToCart(state, action) {
      const newCartItem = action.payload;
      // console.log("newcartitem", newCartItem);
      let flag = false;

      for (let i = 0; i < state.cartlist.length; i++) {
        if (state.cartlist[i].id === newCartItem.id) {
          flag = true;
          if (action.payload.type === "replace") {
            state.cartlist[i].quantity = newCartItem.quantity;
          } else {
            state.cartlist[i].quantity += newCartItem.quantity;
          }
          break;
        }
      }
      if (!flag) {
        state.cartlist.push(newCartItem);
      }
    },
    RemoveFromCart(state, action) {
      const cartid = action.payload;
      state.cartlist = state.cartlist.filter((item) => {
        return item.id !== cartid;
      });
    },
    setCart(state, action) {
      state.cartlist = action.payload;
    },
    updateCartFooter(state) {
      state.quantity = state.cartlist.reduce((total, item) => {
        // console.log(total,item.quantity)
        return total + item.quantity;
      }, 0);
      state.total_price = state.cartlist.reduce((total, item) => {
        let sum = item.price * item.quantity;
        return total + sum;
      }, 0);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
