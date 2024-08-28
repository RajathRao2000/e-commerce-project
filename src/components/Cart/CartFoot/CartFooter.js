import React from "react";
import { useSelector } from "react-redux";
import dollarconverter from "@/utils/dollarconverter";
const makePayment = async (amount) => {
  const res = await initializeRazorpay();
  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  // Make API call to the serverless API
  const data = await fetch("/api/razorpay", {
    method: "POST",
    body: JSON.stringify({ amount }),
  }).then((t) => t.json());
  console.log(data);
  var options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: "ecommerce",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Thankyou for your test donation",
    image:
      "https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7561.jpg?t=st=1716792883~exp=1716796483~hmac=a425ff3e3f8b4fc5edf232fecb67c609625945086166955286c0cfc5d981553b&w=740",
    handler: function (response) {
      // Validate payment at server - using webhooks is a better idea.
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Rajath Rao",
      email: "raorajath1998@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const CartFooter = () => {
  const cart = useSelector((state) => state.cart);
  const total = dollarconverter(
    "total_price" in cart ? cart.total_price.toFixed(2) : ""
  );
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
        <p>₹ {total}</p>
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        <button
          onClick={() => makePayment(total)}
          className=" w-full h-[50px] bg-[#0384c6] rounded-md text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
