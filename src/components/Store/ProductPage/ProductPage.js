import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/redux/cartSlice";
import ProductReviews from "./ProductReviews/ProductReviews";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import Link from "next/link";
import dollarconverter from "@/dollarconverter";
const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
const reviewsArray = [
  {
    name: "jack",
    rating: 5,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate mollitia quos officia earum ut rem sed libero sunt eligendi neque ullam asperiores aliquid, atque veritatis magni ipsum modi consequuntur possimus.",
    title: "Exceptional Experience: A Glowing Review",
    date: new Date().toString(),
  },

  {
    name: "Everett Vasquez",
    gender: "male",
    title: "Absolutely Wonderful: A Five-Star Review",
    review:
      "Anim cillum occaecat nulla est duis. Voluptate esse ut pariatur consequat proident ad sint laborum aute. Consectetur officia pariatur voluptate eu ut adipisicing voluptate voluptate dolor sunt.\r\n",
    date: "Fri Jan 20 2017 02:40:07 GMT+0530 (India Standard Time)",
  },
  {
    name: "Cherie Nielsen",
    gender: "female",
    title: "Incredible Service: A Rave Review",
    review:
      "Voluptate in Lorem id amet consectetur in ex. Elit elit culpa officia deserunt cupidatat ex est dolore irure occaecat laboris eu deserunt ad. Ea sit excepteur in est commodo.\r\n",
    date: "Mon Nov 21 2016 21:28:17 GMT+0530 (India Standard Time)",
  },
  {
    name: "Perez Hernandez",
    gender: "male",
    title: "Outstanding Quality: A Stellar Review",
    review:
      "Officia fugiat dolor irure exercitation ullamco. Elit ex ex proident fugiat cupidatat anim magna et non ea reprehenderit ea. Cupidatat laborum tempor deserunt mollit. Ut non id aute amet nisi anim aliqua proident. Sint eu est reprehenderit mollit fugiat est ullamco consectetur esse minim dolore sit mollit.\r\n",
    date: "Sat Feb 28 2015 14:18:09 GMT+0530 (India Standard Time)",
  },
  {
    name: "Silva Franco",
    gender: "male",
    title: "Impressive Experience: A Top-Notch Review",
    review:
      "Dolore veniam consectetur esse do. Proident culpa laboris irure sit pariatur minim commodo laboris. Eiusmod qui ad anim laborum proident pariatur ad adipisicing dolor adipisicing. Occaecat id reprehenderit culpa sunt adipisicing commodo labore reprehenderit anim.\r\n",
    date: "Sat Jan 21 2023 23:34:00 GMT+0530 (India Standard Time)",
  },
  {
    name: "Hughes Cantu",
    gender: "male",
    title: "Fantastic Product: A Delighted Review",
    review:
      "Ut qui sunt non proident qui commodo non cupidatat nulla nulla pariatur. Aute occaecat occaecat tempor nisi ipsum aute reprehenderit irure aute officia. Quis aliqua incididunt irure officia minim elit sit enim Lorem qui sunt cillum reprehenderit culpa. Dolor veniam enim proident incididunt consectetur.\r\n",
    date: "Sun Nov 19 2017 10:58:16 GMT+0530 (India Standard Time)",
  },
];

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [productDetails, setProductDetails] = useState({});
  const [mainImg, setMainImg] = useState(props.mainImg);
  const [loader, setLoader] = useState(false);
  const auth = useSelector((state) => state.auth);
  const fetchDatafromId = async () => {
    try {
      const id = router.query.product_id;
      if (id !== undefined) {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        // console.log("res", res.data);
        setProductDetails(res.data);
        setMainImg(res.data.images[0]);
      }
    } catch (error) {
      console.log("error in getting product info", error);
    }
  };
  useEffect(() => {
    fetchDatafromId();
  }, [router]);

  const {
    id,
    title,
    description = "",
    price = 0,
    discountPercentage,
    rating,
    stock,
    brand = "",
    category,
    thumbnail,
    images = [],
    reviews,
  } = productDetails;

  const addtocart = async (quantity) => {
    if (!auth.userData.email) {
      router.replace("/auth/sign-in");
      return;
    }
    setLoader(true);
    const res = await axios.post("/api/addtocart", {
      ...productDetails,
      email: auth.userData.email,
      quantity,
      type: "update",
    });
    // console.log(res.data);
    dispatch(cartActions.AddToCart({ ...productDetails, quantity: 1 }));
    setLoader();
  };

  return (
    <>
      <div className="product-page grid">
        {productDetails.id ? (
          <>
            <div className="product-page-header p-4 my-4">
              <div className="product-page-breadcrumb">
                <Link
                  className="text-blue-500 hover:text-blue-400"
                  href={"/store"}
                >
                  categories
                </Link>{" "}
                /{" "}
                <Link
                  className="text-blue-500 hover:text-blue-400"
                  href={`/store/${productDetails.category}`}
                >
                  {productDetails.category}
                </Link>{" "}
                / {productDetails.title}
              </div>
            </div>
            <div className="product-bg flex flex-col md:flex-row justify-center items-center ">
              <div className="product-image grid  gap-3 ">
                <div className="main-img w-screen sm:w-[500px] h-[300px] shadow-md grid">
                  <img
                    className="object-contain h-[inherit] w-full "
                    alt="main image"
                    height={400}
                    width={500}
                    src={mainImg}
                  />
                </div>
                <div className="images-thumbnail-container flex gap-2  min-w-[300px]  h-fit overflow-auto">
                  {images.map((url) => {
                    return (
                      <button
                        key={Math.random()}
                        className={` w-[100px] h-[100px] border-2 ${
                          url === mainImg
                            ? " border-blue-600"
                            : "border-transparent"
                        }`}
                        onClick={() => setMainImg(url)}
                      >
                        <img
                          alt="sub images"
                          className="w-full h-full object-contain"
                          key={id + "image"}
                          src={url}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="product-details p-7 flex flex-col h-full gap-9">
                <div className="product-details-header flex flex-col gap-1">
                  <h1 className="text-5xl">{title}</h1>
                  <p className="text-xs text-gray-500">{brand}</p>
                  <div className="w-[150px]">
                    <Rating
                      value={rating}
                      itemStyles={myStyles}
                      radius="small"
                      readOnly
                    />
                  </div>
                </div>
                <div className="product-description">
                  <p className="font-semibold">Description:</p>
                  <p>{description}</p>
                </div>
                <div className="product-details-footer flex items-center w-full  ">
                  <p className="text-2xl">₹ {dollarconverter(price)}</p>
                  <button
                    onClick={() => addtocart(1)}
                    className={`ml-4 p-2 bg-[#0384c6] text-white rounded-md h-[40px] w-[100px] flex justify-center items-center ${
                      loader ? "opacity-50" : ""
                    }`}
                    disabled={loader}
                  >
                    {loader ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <circle cx={18} cy={12} r={0} fill="white">
                          <animate
                            attributeName="r"
                            begin={0.67}
                            calcMode="spline"
                            dur="1.5s"
                            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                            repeatCount="indefinite"
                            values="0;2;0;0"
                          ></animate>
                        </circle>
                        <circle cx={12} cy={12} r={0} fill="white">
                          <animate
                            attributeName="r"
                            begin={0.33}
                            calcMode="spline"
                            dur="1.5s"
                            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                            repeatCount="indefinite"
                            values="0;2;0;0"
                          ></animate>
                        </circle>
                        <circle cx={6} cy={12} r={0} fill="white">
                          <animate
                            attributeName="r"
                            begin={0}
                            calcMode="spline"
                            dur="1.5s"
                            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                            repeatCount="indefinite"
                            values="0;2;0;0"
                          ></animate>
                        </circle>
                      </svg>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                </div>
              </div>
            </div>
            <ProductReviews reviewsArray={reviews} />
          </>
        ) : (
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                opacity={0.5}
              ></path>
              <path
                fill="black"
                d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
              >
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  from="0 12 12"
                  repeatCount="indefinite"
                  to="360 12 12"
                  type="rotate"
                ></animateTransform>
              </path>
            </svg>
          </p>
        )}
      </div>
    </>
  );
};

export default ProductPage;
