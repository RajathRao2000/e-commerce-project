import React from "react";
import Star from "@/components/UI/Star/Star";

import { Rating, RoundedStar } from "@smastrom/react-rating";
const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
const Review = ({
  rating = 5,
  title = "Some Title",
  review = "some Description",
  name = "Name lname",
  date = new Date().toString(),
}) => {
  return (
    <div className="flex gap-3 flex-col border-b-2 py-3">
      <div>
        <div className="w-[100px]">
          <Rating
            value={rating}
            itemStyles={myStyles}
            radius="small"
            readOnly
          />
        </div>

        <p className="text-xl">{title}</p>
      </div>
      <p>{review}</p>
      <div className=" flex gap-4">
        <p>{name}</p>
        <p className="border-r-[1px] border-gray-400"></p>
        <p>{date}</p>
      </div>
    </div>
  );
};

const ProductReviews = ({ reviewsArray }) => {
  return (
    <div className="product-reviews-bg flex flex-col justify-center items-center p-9 gap-7">
      <div className="product-review-list p-3 flex flex-col gap-7">
        <h1 className=" text-3xl">Recent reviews</h1>
        {reviewsArray?.map(
          ({
            rating = 5,
            title = "Some Title",
            review = "some Description",
            name = "Name lname",
            date = new Date().toString(),
          }) => {
            return (
              <Review
                key={Math.random()}
                rating={rating}
                title={title}
                review={review}
                name={name}
                date={date}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
