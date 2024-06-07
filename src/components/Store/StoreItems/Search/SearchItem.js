import { Rating, RoundedStar } from "@smastrom/react-rating";
import Link from "next/link";
import dollarconverter from "@/dollarconverter";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

export const SearchItem = ({
  thumbnail,
  title,
  rating,
  category,
  id,
  price,
}) => {
  return (
    <Link href={`/store/${category}/${id}`}>
      <div className="item-bg flex gap-3 p-2 border-b-[1px]">
        <div
          style={{ backgroundImage: `url(${thumbnail})` }}
          className="w-[80px] h-[100px] bg-cover bg-center bg-no-repeat rounded"
        ></div>
        <div>
          <p>{title}</p>

          <div className="w-[100px]">
            <Rating
              value={rating}
              itemStyles={myStyles}
              radius="small"
              readOnly
            />
          </div>
          <p>₹ {dollarconverter(price)}</p>
        </div>
      </div>
    </Link>
  );
};
