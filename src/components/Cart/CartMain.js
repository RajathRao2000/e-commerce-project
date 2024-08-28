import React from "react";
import CartBody from "./CartBody/CartBody";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/redux/uiSlice";
import CartHeader from "./CartHead/CartHeader";
import CartFooter from "./CartFoot/CartFooter";

const CartList = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const setShowCart = (bool) => {
    dispatch(uiActions.setShowCart(bool));
  };

  return (
    <>
      <div
        className={`cart-bg fixed h-full z-10 transition-colors ${
          showCart ? "bg-black/[0.8] w-full" : "bg-black/[0.4] w-0"
        } duration-200`}
        onClick={(e) => {
          if ((e.target.className + "").includes("cart-bg")) {
            setShowCart(false);
          }
        }}
      >
        <div
          className={` bg-white h-full flex flex-col overflow-hidden ${
            showCart
              ? "w-screen sm:w-[450px] "
              : "overflow-hidden opacity-0 translate-x-[100%]"
          } duration-200 transition-[opacity,transform] origin-right ease-in-out fixed right-0`}
        >
          <CartHeader />
          <CartBody />
          <CartFooter />
        </div>
      </div>
    </>
  );
};

export default CartList;
