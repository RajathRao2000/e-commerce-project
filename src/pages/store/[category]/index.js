import StoreItems from "@/components/Store/StoreItems/StoreItems";
import CategoryNav from "@/components/Store/CategoryNav/CategoryNav";
import { productAction } from "@/redux/productsSlice";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";

const Category = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query.category;
  const [itemList, setItemList] = useState([]);

  async function getData() {
    dispatch(productAction.updateProductList([]))
    let url = "";
    if (query !== undefined) {
      if (query === "all") {
        url = "https://dummyjson.com/products";
      } else {
        url = `https://dummyjson.com/products/category/${query}`;
      }

      try {
        // console.log("url", query, url);
        const res = await axios.get(url);
        // console.log(res.data);
        setItemList(res.data);
        dispatch(productAction.updateProductList(res.data));
      } catch (error) {
        // console.log(error);
      }
    }
  }
  useEffect(() => {
    getData();
  }, [query]);

  return (
    <>
      <Head>
        <title>Store: {query}</title>
        <meta property="description" content={`This page lists all the products related to ${query}`} />
      </Head>
      <div className="flex w-screen max-w-6xl">
        <CategoryNav />
        <StoreItems items={itemList} />
      </div>
    </>
  );
};

export default Category;
