import React from "react";
import { useSelector } from "react-redux";

const CartFooter = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <div className="cart-footer font-bold h-[168px] border-t p-6 flex flex-col gap-7">
      <div className="text flex  justify-between font-semibold">
        <div>
          <p>Subtotal</p>
          <p className="text-sm text-gray-500 ">
            Shipping will be calculated at checkout
          </p>
        </div>
        <p>$ {cart.total_price.toFixed(2)}</p>
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        <button className=" w-full h-[50px] bg-[#0384c6] rounded-md text-white">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
