// const Razorpay = require("razorpay");
// const shortid = require("shortid");
import Razorpay
 from "razorpay";
 import { nanoid } from "nanoid";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Initialize razorpay object
    // console.log(process.env.RAZORPAY_KEY,process.env.RAZORPAY_SECRET)
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    // console.log(JSON.parse(req.body),"||")
    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = Number(JSON.parse(req.body).amount);
    // console.log(typeof amount,amount,amount*100,typeof amount*100)
    const currency = "INR";
    const options = {
      amount: amount*100,
      currency,
      receipt: nanoid(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      // console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}

