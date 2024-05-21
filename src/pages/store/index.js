import ProductDisplay from "@/components/Store/StoreItems/StoreItems";
import React from "react";
import axios from "axios";

const ProductList = (props) => {
  return (
    <div className="flex">
      <ProductDisplay items={props.items} />
    </div>
  );
};

export default ProductList;

export async function getStaticProps() {
  let resdata;
  try {
    const res = await axios.get(`https://dummyjson.com/products`);
    resdata = res.data;
    // console.log("getstaticp", "success");
  } catch (error) {
    // console.log("getstaticprops", error);
  }

  return {
    props: {
      items: resdata,
    },
    revalidate: 10,
  };
}
