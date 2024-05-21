import { cartActions } from "@/redux/cartSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Body = (props) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);
  // console.log(cart.cartlist);
  useEffect(() => {
    // console.log("cart", cart);
    dispatch(cartActions.updateCartFooter());
  }, [cart]);

  const fetchCart = async (email) => {
    const res = await axios.post("/api/getcartitems", {
      email,
    });
    dispatch(cartActions.setCart(res.data.data));
  };

  useEffect(() => {
    let ls_userData = JSON.parse(localStorage.getItem("token"));
    // console.log(ls_userData);
    if (ls_userData !== null) {
      fetchCart(ls_userData.email);
    } else if (userData.email) {
      fetchCart(userData.email);
    }
  }, [userData]);

  return (
    <div className={`min-h-[calc(100vh-69.5px)] flex justify-center`}>
      <div className=" max-w-6xl min-h-[calc(100vh-69.5px)] w-full flex justify-center items-center">
        {props.children}
      </div>
    </div>
  );
};

export default Body;
