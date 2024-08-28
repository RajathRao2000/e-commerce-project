import React, { useEffect } from "react";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import { useState } from "react";

import Search from "./Search/Search";
import { useRouter } from "next/router";
import Link from "next/link";

import dollarconverter from "@/utils/dollarconverter";

const StoreItems = () => {
  const router = useRouter();
  const [query, setQuery] = useState();
  const productlist = useSelector((state) => state.product.products);
  const [_productlist, _setProductList] = useState(productlist.products);
  const [pricerange, setPriceRange] = useState("all");
  const [orderby, setOrderBy] = useState("--select--");
  const [pagetitle, setPageTitle] = useState("");

  useEffect(() => {
    setQuery(router.query.category);
  }, [router]);

  useEffect(() => {
    if (query) {
      let arr = query.split("");
      let title = arr[0].toUpperCase() + arr.join("").substring(1);
      setPageTitle(title);
    }
  }, [query]);

  function handlesorting(e) {
    setOrderBy(e.target.value);
  }
  function handlepricerange(e) {
    setPriceRange(e.target.value);
  }

  useEffect(() => {
    _setProductList("products" in productlist ? productlist.products : []);
    setPriceRange("all");
    setOrderBy("--select--");
  }, [productlist]);

  useEffect(() => {
    let arr = "products" in productlist ? [...productlist.products] : [];
    let _orderby = orderby.toLowerCase();
    let _pricerange = pricerange.toLowerCase();
    if (_orderby != "--select--") {
      switch (_orderby) {
        case "ascending":
          arr.sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          });
          break;
        case "descending":
          arr.sort((a, b) => {
            if (a.title < b.title) {
              return 1;
            }
            if (a.title > b.title) {
              return -1;
            }
            return 0;
          });
          break;
        case "price: high to low":
          arr.sort((a, b) => {
            if (dollarconverter(a.price) < dollarconverter(b.price)) {
              return 1;
            }
            if (dollarconverter(a.price) > dollarconverter(b.price)) {
              return -1;
            }
            return 0;
          });
          break;
        case "price: low to high":
          arr.sort((a, b) => {
            if (dollarconverter(a.price) > dollarconverter(b.price)) {
              return 1;
            }
            if (dollarconverter(a.price) < dollarconverter(b.price)) {
              return -1;
            }
            return 0;
          });
          break;
      }
    }

    if (_pricerange != "all") {
      switch (_pricerange) {
        case "below ₹500":
          arr = arr.filter((item) => {
            console.log(
              item.price,
              dollarconverter(item.price),
              dollarconverter(item.price) < 500
            );
            return dollarconverter(item.price) < 500;
          });
          break;
        case "₹500 - ₹1000":
          arr = arr.filter((item) => {
            return (
              dollarconverter(item.price) > 500 &&
              dollarconverter(item.price) < 1000
            );
          });
          break;
        case "₹1000 - ₹2000":
          arr = arr.filter((item) => {
            return (
              dollarconverter(item.price) > 1000 &&
              dollarconverter(item.price) < 2000
            );
          });
          break;
        case "₹2000 and more":
          arr = arr.filter((item) => {
            return dollarconverter(item.price) > 2000;
          });
          break;
        case "all":
          arr = [_productlist];
          break;
      }
    }
    _setProductList(arr);
  }, [pricerange, orderby]);

  return (
    <section className="store-bg flex flex-col w-full min-h-[calc(100vh-69.5px)] relative">
      <div className="filter border-b-[1px] border-black sm:h-[80px] w-full shadow flex flex-col sm:flex-row gap-7 sm:gap-2 sm:items-center p-6 sm:justify-around items-center">
        <Search />
        <div className="filter-store gap-5 flex flex-col sm:flex-row">
          <div className="price-range relative">
            <p className="absolute top-[-20px] text-sm">Select Price Range</p>
            <select
              className="rounded w-[200px] p-2"
              value={pricerange}
              onChange={handlepricerange}
            >
              <option>All</option>
              <option>Below ₹500</option>
              <option>₹500 - ₹1000</option>
              <option>₹1000 - ₹2000</option>
              <option>₹2000 and more</option>
            </select>
          </div>
          <div className="arrange-list relative">
            <p className="absolute top-[-20px] text-sm">Order By</p>

            <select
              className="rounded w-[200px] p-2"
              value={orderby}
              onChange={handlesorting}
            >
              <option>--select--</option>
              <option>Ascending</option>
              <option>Descending</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header border-b-2 p-3">
        <div className=" py-4 text-2xl font-semibold  sm:text-3xl sm:py-5 md:text-5xl md:text-left md:py-6">
          {pagetitle}
        </div>
        <div className="breadcrumbs py-2 ">
          <Link className="text-blue-600 hover:text-blue-100" href={"/store"}>
            categories
          </Link>{" "}
          / <Link href={"#"}> {query}</Link>
        </div>
      </div>
      {_productlist.length !== 0 ? (
        <div className="store-items-container w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3  overflow-auto p-3">
          {_productlist.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </div>
      ) : !(pricerange !== "all" || orderby !== "--select--") ? (
        <p className=" h-full flex justify-center items-center">
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
            <path fill="white" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
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
      ) : (
        <p className="h-full flex justify-center items-center">
          There are no items matching this filter !
        </p>
      )}
    </section>
  );
};

export default StoreItems;
