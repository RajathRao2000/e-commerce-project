import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "@/redux/cartSlice";
// import { Rating } from "react-simple-star-rating";
import Star from "@/components/UI/Star/Star";
import { useRouter } from "next/router";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import dollarconverter from "@/dollarconverter";
const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
const Item = (props) => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const auth = useSelector((state) => state.auth);
  const cartlist = useSelector((state) => state.cart.cartlist);
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = props;

  return (
    <div
      className={`item-container flex sm:flex-col bg-white  lg:min-w-[260px] lg:max-w-[300px] w-full  h-460px mb-16 gap-2 `}
    >
      <Link href={`/store/${category}/${id}`}>
        <div>
          <img
            className="w-[300px] h-[320px] object-start object-cover"
            src={thumbnail}
          />
        </div>
      </Link>
      <div className="card-body w-[60%] sm:w-auto">
        <Link href={`/store/${category}/${id}`}>
          <h1 className="text-xl">{title}</h1>
        </Link>

        <div className="w-[100px]">
          <Rating
            value={rating}
            itemStyles={myStyles}
            radius="small"
            readOnly
          />
        </div>
        <div className="card-footer flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <p>₹ {dollarconverter(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
