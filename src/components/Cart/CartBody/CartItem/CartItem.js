import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cartActions } from "@/redux/cartSlice";
let timeouttoken = "";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [input, setInput] = useState(props.quantity);

  const addtocart = async (quantity) => {
    const res = await axios.post("/api/addtocart", {
      ...props,
      email: auth.userData.email,
      quantity,
      type: "replace",
    });
    // console.log("mongores", res.data);
  };

  const changeHandler = (e) => {
    setInput(e.target.value.replace(/[^0-9]*/g, ""));
  };

  const deleteItem =async ()=>{
    const res=await axios.post(`/api/deletecartitem`,{
      id: props.id
    })
    // console.log(res)
    dispatch(cartActions.RemoveFromCart(props.id))
  }

  useEffect(() => {
    setInput(props.quantity);
  }, [props.quantity]);

  return (
    <div className="p-2 flex gap-4 h-fit bg-gray-50 justify-between">
      <div className="flex gap-4">
        <div
          className="h-[90px] w-[90px] rounded-md bg-cover "
          style={{ backgroundImage: `url(${props.thumbnail})` }}
        ></div>
        <div className="item-info flex flex-col">
          <p className="">{props.title}</p>
          <div className="flex items-center  h-full">
            <label htmlFor="cart-quantity">Quantity: </label>
            <input
              id="cart-quantity"
              className={` border-[1px] border-gray-400 w-10 ml-2 rounded-md p-[2px] pl-[4px] focus:border-blue-500 focus:outline-none focus:border-2`}
              value={input}
              onChange={changeHandler}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setInput(1);
                }
                addtocart(Number(input));
                dispatch(
                  cartActions.AddToCart({
                    ...props,
                    type: "replace",
                    quantity: Number(input),
                  })
                );
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between mr-2">
        <p className="">$ {props.price}</p>
        <button onClick={deleteItem} className=" rounded-md p-1 font-semibold text-red-500">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
