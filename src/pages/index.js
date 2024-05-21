import { Inter } from "next/font/google";
import heroimg from "../images/bg-store.jpg";
import lady from "../images/lady-shopping.jpg";
import shirts from "../images/shirts.jpg";
import smartphone from "../images/smartphone.jpg";
import laptop from "../images/laptop.jpg";
import furniture from "../images/furniture.jpg";
import watches from "../images/watches.jpg";
import homedeco from "../images/home-decoration.jpg";
import shoes from "../images/shoes.jpg";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

const CategoryCard = ({ title, url, imageurl }) => {
  return (
    <Link href={`/store/${url}`} className=" hover:opacity-75">
      <div className=" p-2 relative">
        <img
          className="w-[300px] h-[300px] object-center rounded-xl object-cover"
          src={imageurl}
        />
        <p className="font-bold absolute bottom-3 right-[50%] translate-x-[50%] text-white bg-black/80 p-1 px-5 rounded-full w-max">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default function Home() {
  const router = useRouter();
  const before =
    "before:absolute before:w-screen before:h-full before:bg-black/60 h-[50vh]";
  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <div className="hero-container relative h-[50vh] min-h-[660px] ">
          <div
            style={{ backgroundImage: `url(${heroimg.src})` }}
            className={`w-screen bg-cover bg-no-repeat h-full min-h-[400px] relative ${before}`}
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
              <div className="text-5xl font-bold">
                Discover Limitless Possibilities:{" "}
                <p className="font-semibold">Shop Our Latest Collection Now!</p>
              </div>
              <div className="text flex flex-col gap-3">
                From fashion-forward finds to must-have essentials, explore a
                world of endless choices
                <button
                  onClick={() => router.replace("/store/all")}
                  className="py-4 px-7 w-fit bg-[#121928] flex items-center justify-center rounded-full"
                >
                  <p className="text-xl ">Explore Now </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-body max-w-6xl ">
          <div className="section1 h-[500px] w-full grid grid-cols-3  p-9">
            <div className="text border-2 col-start-1 col-end-3 w-full h-full p-10 ">
              <p className="text-6xl font-extrabold">Elevate Your Wardrobe: </p>
              <p className=" justify-self-center text-3xl">
                Explore Exclusive Styles for Every Occasion
              </p>
            </div>
            <div
              className="image h-full w-full bg-cover bg-no-repeat "
              style={{ backgroundImage: `url(${lady.src})` }}
            ></div>
          </div>
          <div className="section2 h-[500px]  w-full grid grid-cols-3 p-9">
            <div
              className="image h-full w-full bg-cover bg-no-repeat "
              style={{ backgroundImage: `url(${shirts.src})` }}
            ></div>
            <div className="text border-2 col-start-2 col-end-4 w-full h-full p-10">
              <p className="text-6xl font-extrabold ml-10">
                Refine Your Look:{" "}
              </p>
              <p className=" justify-self-center text-3xl  ml-10">
                Discover Premium Menswear for Every Adventure!
              </p>
            </div>
          </div>
          <div className="section3 flex flex-col items-center w-full">
            <h2 className=" p-2 text-2xl underline">Shop by Category</h2>
            <div className="home-category-container border-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full place-items-center">
              <CategoryCard
                title="Smartphones"
                imageurl={smartphone.src}
                url={"smartphones"}
              />
              <CategoryCard
                title="Laptops"
                imageurl={laptop.src}
                url={"laptops"}
              />
              <CategoryCard
                title="Furniture"
                imageurl={furniture.src}
                url={"furniture"}
              />
              <CategoryCard
                title="Watches"
                imageurl={watches.src}
                url={"mens-watches"}
              />
              <CategoryCard
                title="Home Decoration"
                imageurl={homedeco.src}
                url={"home-decoration"}
              />
              <CategoryCard
                title="Shoes"
                imageurl={shoes.src}
                url={"mens-shoes"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
