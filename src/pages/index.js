import { Inter } from "next/font/google";
import Slider from "react-slick";
import lady from "../assets/images/lady-shopping.jpg";
import shirts from "../assets/images/shirts.jpg";
import smartphone from "../assets/images/smartphone.jpg";
import laptop from "../assets/images/laptop.jpg";
import furniture from "../assets/images/furniture.jpg";
import watches from "../assets/images/watches.jpg";
import homedeco from "../assets/images/home-decoration.jpg";
import shoes from "../assets/images/shoes.jpg";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import("next").NextConfig;
import Head from "next/head";
import Carousel from "@/components/MainPage/Carousel/Carousel";
import HeroSection from "@/components/MainPage/Hero/HeroSection";
// src\images\hero-blue-product .jpg

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

  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="description" content="Welcome to homepage" />
      </Head>
      <div className="grid min-h-screen place-items-center">
        <HeroSection />
        <Carousel />
        <div className="home-body max-w-6xl ">
          <div className="section1 min-h-[500px] relative p-5 flex flex-col-reverse sm:flex-row  sm:items-center md:p-20">
            <div className="para flex flex-col justify-center p-7 absolute text-white top-0 z-50 h-full sm:static sm:text-black">
              <div className="title text-5xl font-bold">
                Elevate Your Wardrobe
              </div>
              <div className="sub-text text-xl">
                Explore Exclusive Styles for Every Occasion!
              </div>
              <div className="button w-full mt-5">
                <button
                  onClick={() => router.replace("/store/womens-dresses")}
                  className="p-2 border-[1px] border-white hover:border-black hover:bg-white hover:text-black transition-colors duration-200 sm:border-black sm:hover:bg-black sm:hover:text-white"
                >
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
                <button
                  onClick={() => router.replace("/store/mens-shirts")}
                  className="p-2 border-[1px] border-white hover:border-black hover:bg-white hover:text-black transition-colors duration-200 sm:border-black sm:hover:bg-black sm:hover:text-white"
                >
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
            <h2 className=" p-2 text-3xl my-10 underline text-center">
              Our Top Categories
            </h2>
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
