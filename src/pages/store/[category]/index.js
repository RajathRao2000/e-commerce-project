import StoreItems from "@/components/Store/StoreItems/StoreItems";
import CategoryNav from "@/components/Store/CategoryNav/CategoryNav";
import { productAction } from "@/redux/productsSlice";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const category = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query.category;
  const [itemList, setItemList] = useState([]);

  async function getData() {
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
    <div className="flex w-screen max-w-6xl">
      <CategoryNav />
      <StoreItems items={itemList} />
    </div>
  );
};

export default category;
