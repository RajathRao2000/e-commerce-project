import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/redux/cartSlice";
import { Rating } from "react-simple-star-rating";
import Star from "@/components/UI/Star/Star";
import ProductReviews from "./ProductReviews/ProductReviews";

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
      // console.log(error);
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
    <div className="product-page grid mt-7">
      {productDetails.id ? (
        <>
          <div className="product-bg flex ">
            <div className="product-image shadow flex flex-col w-[500px] gap-3">
              <div className="main-img h-96 flex items-center justify-center w-[500px]">
                <div
                  style={{ backgroundImage: `url("${mainImg}")` }}
                  className=" h-full w-full bg-contain bg-no-repeat bg-center"
                ></div>
              </div>
              <div className="images-thumbnail-container flex gap-3 p-2 border-[1px]  justify-around items-center overflow-auto">
                {images.map((url) => {
                  return (
                    <button
                      className={` w-24 h-24 rounded border-2 ${
                        url === mainImg
                          ? " border-blue-600"
                          : "border-transparent"
                      }`}
                      onClick={() => setMainImg(url)}
                    >
                      <img key={id + "image"} className={`   `} src={url} />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="product-details p-7 flex flex-col h-full gap-9">
              <div className="product-details-header flex flex-col gap-1">
                <h1 className="text-5xl">{title}</h1>
                <p className="text-xs text-gray-500">{brand}</p>
                <Rating
                  style={{display:"flex"}}
                  initialValue={rating}
                  fillIcon={<Star color={true} />}
                  emptyIcon={<Star color={false} />}
                  readonly
                />
              </div>
              <div className="product-description">
                <p className="font-semibold">Description:</p>
                <p>{description}</p>
              </div>
              <div className="product-details-footer flex items-center w-full  ">
                <p className="text-2xl">$ {price}</p>
                <button
                  onClick={() => addtocart(1)}
                  className={`ml-4 p-2 bg-[#0384c6] text-white rounded-md h-[40px] w-[100px] flex justify-center items-center ${loader?"opacity-50":""}`}
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
          <ProductReviews reviewsArray={reviewsArray} />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default ProductPage;
