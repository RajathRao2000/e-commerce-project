import axios from "axios";
import Head from "next/head";
import Link from "next/link";
// import makeup from "../../images/makeup-transparent.png";
import makeup from "../../images/makeup-banner.jpg";
import fragrance from "../../images/fragrances-banner.jpg";
import furniture from "../../images/furniture-banner.jpg";
import Image from "next/image";
import Search from "@/components/Store/StoreItems/Search/Search";
const CategoryBanner = ({ category, product_list }) => {
  let _category = "";
  let bannertitle = "";
  let background = "";
  let image = "";
  let linkbg=""
  switch (category) {
    case "beauty":
      _category = "Beauty";
      bannertitle = "Essential Beauty Picks";
      background =
        "sm:bg-gradient-to-b from-[#d7c2c4] via-[#ddcdce] to-[#e3d1d2]";
      image = makeup.src;
      linkbg="bg-[#c9c7c5]"
      break;
    case "fragrances":
      _category = "Fragrances";
      bannertitle = "Discover Your Signature Scent";
      image = fragrance.src;
      background =
        "sm:bg-gradient-to-b from-[#c9c7c5] via-[#d7d9d9] to-[#e6ecf1]";
      break;
    case "furniture":
      _category = "Furniture";
      bannertitle = "Transform Your Space";
      image = furniture.src;
      background =
        "sm:bg-gradient-to-b from-[#cfd6d8] via-[#c0c1ba] to-[#876d5a]";
      break;
  }
  return (
    <div className={`category-banner p-5`}>
      <div
        className={`relative grid sm:grid-cols-3 md:p-7 gap-4 sm:h-[250px] md:h-[400px] sm:p-0  ${background}  rounded-2xl `}
      >
        <div className="absolute hidden sm:block h-full">
          <Image
            className="h-full w-fit object-contain rounded-l-2xl"
            width={400}
            height={500}
            src={image}
            alt={_category}
          />
        </div>
        <div
          className={`flex flex-col gap-2  text-center relative justify-center sm:items-center sm:p-0  sm:text-left `}
        >
          <div className="z-[2] p-5 flex flex-col  sm:h-full sm:rounded-none md:my-8 md:justify-center md:rounded-lg sm:text-black sm:bg-white  sm:font-extrabold sm:gap-5  sm:w-[217px]  ">
            <p className="text-3xl sm:text-4xl ">{bannertitle}</p>
            <Link
              className="sm:border-4 text-blue-600 hover:text-blue-300 sm:border-black sm:text-black sm:w-fit sm:p-2 sm:hover:text-white sm:hover:bg-black "
              href={`/store/${category}`}
            >
              View more
            </Link>
          </div>
        </div>

        <div className="products-container grid place-items-center place-content-center sm:grid-cols-3 sm:col-start-2 sm:col-end-4 z-[2]">
          {product_list.map((product, index) => {
            if (index < 3) {
              return (
                <Link
                  key={Math.random()}
                  href={`/store/${category}/${product.id}`}
                  className={` p-5 hover:brightness-50 hover:scale-105 transition-transform sm:p-0`}
                >
                  <img
                    className=" "
                    width={300}
                    height={300}
                    src={product.thumbnail}
                  />
                  <p className="p-2 text-lg font-semibold text-center sm:text-sm sm:font-medium">
                    {product.title}
                  </p>
                  {/* <p className="p-2">{(product.title).slice(0,20)}{product.title.length>20?"...":""}</p> */}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ categoriesArr, productsObj }) => {
  let productsArr = productsObj.products;

  let obj = {};
  for (let i = 0; i < productsArr.length; i++) {
    let temp = productsArr[i].category;
    if (!obj[temp]) {
      obj[temp] = [productsObj.products[i]];
    } else {
      obj[temp].push(productsObj.products[i]);
    }
  }

  return (
    <>
      <Head>
        <title>Store</title>
      </Head>
      <div className="flex flex-col min-h-screen w-screen max-w-6xl ">
        <h1 className="text-5xl m-10 text-center">Categories</h1>
        <div className=" flex justify-center">
          <div className=" w-[300px]">
            <Search />
          </div>
        </div>
        <div className="category-banner-bg  w-full">
          {Object.keys(obj).map((category) => {
            let temp = obj[category];
            return (
              <CategoryBanner
                key={Math.random()}
                category={category}
                product_list={temp}
              />
            );
          })}
        </div>
        <div className="grid place-items-center ">
          <h1 className="text-2xl my-10">Browse Other Categories:</h1>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {categoriesArr.map((value) => {
              return (
                <Link
                  key={Math.random()}
                  className="text-center rounded-md p-3 border-2 border-black font-bold hover:scale-110 duration-75 transition-[transform,color,background] hover:bg-black hover:text-white"
                  href={`/store/${value.slug}`}
                >
                  {value.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

export async function getStaticProps() {
  let resdata_products;
  let resdata_categories;
  try {
    const res = await axios.get(`https://dummyjson.com/products?limit=15`);
    resdata_products = res.data;
    // console.log("getstaticp", "success",resdata);
  } catch (error) {
    // console.log("getstaticprops", error);
  }
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");
    resdata_categories = res.data;
    console.log("getstaticp", "success", resdata);
  } catch (error) {
    // console.log("getstaticprops", error);
  }

  return {
    props: {
      productsObj: resdata_products,
      categoriesArr: resdata_categories,
    },
    // revalidate: 10,
  };
}
