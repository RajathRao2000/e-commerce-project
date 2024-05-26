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
import Link from "next/link";
import Image from "next/image";
import("next").NextConfig;
import Head from "next/head";
const CategoryCard = ({ title, url, imageurl }) => {
  return (
    <Link href={`/store/${url}`} className=" hover:opacity-75 ">
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
    "before:absolute before:w-screen before:h-full before:bg-black/70 h-[50vh]";
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="description" content="Welcome to homepage" />
      </Head>
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
                  className="py-4 px-7 w-fit bg-[#121928] flex items-center justify-center rounded-full hover:brightness-50"
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
          <div className="section1 min-h-[500px] relative p-5 flex flex-col-reverse sm:flex-row  sm:items-center md:p-20">
            <div className="para flex flex-col justify-center p-7 absolute text-white top-0 z-50 h-full sm:static sm:text-black   ">
              <div className="title text-5xl font-bold">
                Elevate Your Wardrobe
              </div>
              <div className="sub-text text-xl">
                Explore Exclusive Styles for Every Occasion!
              </div>
              <div className="button w-full mt-5">
                <button onClick={()=>router.replace("/store/womens-dresses")} className="p-2 border-[1px] border-white hover:border-black hover:bg-white hover:text-black transition-colors duration-200 sm:border-black sm:hover:bg-black sm:hover:text-white">
                  Explore now
                </button>
              </div>
            </div>
            <div className="image brightness-50 sm:brightness-100 bg-contain">
              <Image
                alt="women with a Shopping Bag"
                width={500}
                height={600}
                className="w-full"
                src={lady.src}
              />
            </div>
          </div>
          <div className="section2 min-h-[500px] relative p-5 flex flex-col-reverse sm:flex-row-reverse  sm:items-center md:p-20">
            <div className="para flex flex-col justify-center p-7 absolute text-white top-0 z-50 h-full sm:static sm:text-black   ">
              <div className="title text-5xl font-bold">Refine Your Look</div>
              <div className="sub-text text-xl">
                Discover Premium Menswear for Every Adventure!
              </div>
              <div className="button w-full mt-5">
                <button onClick={()=>router.replace("/store/mens-shirts")} className="p-2 border-[1px] border-white hover:border-black hover:bg-white hover:text-black transition-colors duration-200 sm:border-black sm:hover:bg-black sm:hover:text-white">
                  Explore now
                </button>
              </div>
            </div>
            <div className="image brightness-50 sm:brightness-100 bg-contain">
              <Image
                alt="some shirts"
                width={500}
                height={600}
                src={shirts.src}
                className="w-full"
              />
            </div>
          </div>
          <div className="section3 w-full grid place-items-center">
            <h2 className=" p-2 text-3xl my-10 underline text-center">Our Top Categories</h2>
            <div className="home-category-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full place-items-center gap-5 p-7 max-w-[1050px]">
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
