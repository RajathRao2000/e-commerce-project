import Image from "next/image";
import { useRouter } from "next/router";

import lady from "../../../public/assets/images/subbanner_lady.jpg";
import shirts from "../../../public/assets/images/subbanner_shirts.jpg";

const section1 = {
  title: "Elevate Your Wardrobe",
  subtext: "Explore Exclusive Styles for Every Occasion!",
  route: "/store/womens-dresses",
  image: lady,
};

const section2 = {
  title: "Refine Your Look",
  subtext: "Discover Premium Menswear for Every Adventure!",
  route: "/store/mens-shirts",
  image: shirts,
};

const Banner = ({ title, subtext, image, route }) => {
  const router = useRouter();
  return (
    <div className="sm:min-h-[500px] relative p-5 flex flex-col-reverse sm:flex-row-reverse  sm:items-center md:p-20">
      <div className="para flex flex-col justify-center p-7 absolute text-white top-0 z-50 h-full sm:static sm:text-black sm:max-w-[400px] lg:max-w-[500px]  ">
        <div className="title sm:text-4xl text-6xl font-bold">{title}</div>
        <div className="sub-text sm:text-lg text-xl">{subtext}</div>
        <div className="button w-full mt-5">
          <button
            onClick={() => router.replace(route)}
            className="p-2 border-[1px] border-white hover:border-black hover:bg-white hover:text-black transition-colors duration-200 sm:border-black sm:hover:bg-black sm:hover:text-white"
          >
            Explore now
          </button>
        </div>
      </div>
      <div className="image brightness-50 sm:brightness-100 bg-cover sm:bg-contain">
        <Image
          alt="some shirts"
          width={400}
          // height={500}
          src={image}
          className="w-full"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

const SubBanners = () => {
  const router = useRouter();
  return (
    <>
      <Banner
        title={section1.title}
        subtext={section1.subtext}
        image={section1.image}
        route={section1.route}
      />
      <Banner
        title={section2.title}
        subtext={section2.subtext}
        image={section2.image}
        route={section2.route}
      />
    </>
  );
};

export default SubBanners;
