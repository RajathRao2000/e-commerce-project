import Image from "next/image";
import Link from "next/link";

import smartphone from "../../../public/assets/images/thumb_smartphone.jpg";
import laptop from "../../../public/assets/images/thumb_laptop.jpg";
import furniture from "../../../public/assets/images/thumb_furniture.jpg";
import watches from "../../../public/assets/images/thumb_watches.jpg";
import homedeco from "../../../public/assets/images/thumb_homedeco.jpg";
import shoes from "../../../public/assets/images/thumb_shoes.jpg";

const CategoryCard = ({ title, url, imageurl }) => {
  return (
    <Link href={`/store/${url}`} className=" hover:opacity-75 ">
      <div className=" p-2 relative">
        <Image
          className="w-[300px] h-[300px] object-center rounded-xl object-cover"
          src={imageurl}
          alt={title}
        />
        <p className="font-bold absolute bottom-3 right-[50%] translate-x-[50%] text-white bg-black/80 p-1 px-5 rounded-full w-max">
          {title}
        </p>
      </div>
    </Link>
  );
};

const TopCategories = () => {
  return (
    <div className="section3 w-full grid place-items-center">
      <h2 className=" p-2 text-3xl my-10 underline text-center">
        Our Top Categories
      </h2>
      <div className="home-category-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full place-items-center gap-5 p-7 max-w-[1050px]">
        <CategoryCard
          title="Smartphones"
          imageurl={smartphone}
          url={"smartphones"}
        />
        <CategoryCard title="Laptops" imageurl={laptop} url={"laptops"} />
        <CategoryCard
          title="Furniture"
          imageurl={furniture}
          url={"furniture"}
        />
        <CategoryCard title="Watches" imageurl={watches} url={"mens-watches"} />
        <CategoryCard
          title="Home Decoration"
          imageurl={homedeco}
          url={"home-decoration"}
        />
        <CategoryCard title="Shoes" imageurl={shoes} url={"mens-shoes"} />
      </div>
    </div>
  );
};

export default TopCategories;
