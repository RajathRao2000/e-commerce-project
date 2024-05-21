import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";

const CartBody = () => {
  const cartlist = useSelector((state) => state.cart.cartlist);
  return (
    <div className="flex flex-col gap-2 p-1 overflow-auto h-full focus:outline-none ">
      {cartlist.length !== 0 ? (
        cartlist.map((item) => {
          return (
            <CartItem key={item.id} {...item}/>
          );
        })
      ) : (
        <p>Please add items to your cart</p>
      )}
    </div>
  );
};

export default CartBody;
