import React from "react";
import Star from "@/components/UI/Star/Star";
import { Rating } from "react-simple-star-rating";
const Review = ({
  rating = 5,
  title = "Some Title",
  review = "some Description",
  name = "Name lname",
  date = new Date().toString(),
}) => {
  return (
    <div className="flex gap-3 flex-col border-b-2 py-3">
      <div >
      <p>
        <Rating
          className="m-0 p-0"
          initialValue={rating}
          fillIcon={<Star color={true} />}
          emptyIcon={<Star color={false} />}
        />
      </p>
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
