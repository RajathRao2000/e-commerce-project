import React, { useEffect } from "react";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
let timeouttoken = "";

import { Rating,RoundedStar  } from '@smastrom/react-rating'
const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}

const SearchItem = ({ thumbnail, title, rating, category, id, price }) => {
  return (
    <Link href={`/store/${category}/${id}`}>
      <div className="item-bg flex gap-3 p-2 border-b-[1px]">
        <div
          style={{ backgroundImage: `url(${thumbnail})` }}
          className="w-[80px] h-[100px] bg-cover bg-center bg-no-repeat rounded"
        ></div>
        <div>
          <p>{title}</p>
          
        <div className="w-[100px]">
          <Rating
            value={rating}
            itemStyles={myStyles} 
            radius="small"
            readOnly
          />
        </div>
          <p>$ {price}</p>
        </div>
      </div>
    </Link>
  );
};

const StoreItems = () => {
  const productlist = useSelector((state) => state.product.products);
  const [_productlist, _setProductList] = useState(productlist.products);
  const [pricerange, setPriceRange] = useState("");
  const [orderby, setOrderBy] = useState("--select--");

  function handlesorting(e) {
    setOrderBy(e.target.value);
  }
  function handlepricerange(e) {
    setPriceRange(e.target.value);
  }

  useEffect(() => {
    _setProductList(productlist.products);
  }, [productlist]);

  useEffect(() => {
    let arr = [...productlist.products];
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
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            return 0;
          });
          break;
        case "price: low to high":
          arr.sort((a, b) => {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          break;
      }
    }

    if (_pricerange != "all") {
      switch (_pricerange) {
        case "below $500":
          arr = arr.filter((item) => {
            return item.price < 500;
          });
          break;
        case "$500 - $1000":
          arr = arr.filter((item) => {
            return item.price > 500 && item.price < 1000;
          });
          break;
        case "$1000 - $2000":
          arr = arr.filter((item) => {
            return item.price > 1000 && item.price < 2000;
          });
          break;
        case "$2000 and more":
          arr = arr.filter((item) => {
            return item.price > 2000;
          });
          break;
        case "all":
          arr = [_productlist];
          break;
      }
    }
    _setProductList(arr);
  }, [pricerange, orderby]);

  const [searchResults, setSearchResults] = useState([]);

  const searchQuery = async (usrinput) => {
    if (!usrinput) {
      setSearchResults([]);
      return;
    }
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${usrinput}`
    );
    setSearchResults(res.data.products);
  };

  return (
    <section className="store-bg flex flex-col w-full min-h-[calc(100vh-69.5px)] relative">
      <div className="filter border-b-[1px] border-black sm:h-[80px] w-full shadow flex flex-col sm:flex-row gap-7 sm:gap-2 sm:items-center p-6 sm:justify-around items-center">
        <div className="search-bar shadow relative flex ">
          <input
            name="search"
            className={`p-2 border-b-2 outline-none focus:border-b-black`}
            placeholder="Search"
            onChange={(e) => {
              if (timeouttoken) {
                // console.log("clear timeout", timeouttoken);
                clearTimeout(timeouttoken);
              }
              timeouttoken = setTimeout(() => {
                searchQuery(e.target.value);
              }, 500);
            }}
            onBlur={(e) => {
              e.target.value = "";
              e.target.nextSibling.classList.remove("border-black");
              setSearchResults([]);
            }}
            onFocus={(e) => {
              e.target.nextSibling.classList.add("border-black");
            }}
          />
          <button className="p-2 border-b-2" type="submit" disabled>
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
          </button>
          <div
            className={`search top-[42px] w-[400px] ${
              searchResults.length !== 0
                ? "h-auto max-h-[50vh] border-4 border-blue-500"
                : "h-0"
            } overflow-auto  rounded-md bg-white absolute shadow-lg results z-10 `}
          >
            {searchResults.map((item) => {
              return <SearchItem {...item} />;
            })}
          </div>
        </div>
        <div className="filter-store gap-5 flex flex-col sm:flex-row">
          <div className="price-range relative">
            <p className="absolute top-[-20px] text-sm">Select Price Range</p>
            <select
              className="rounded w-[200px] p-2"
              value={pricerange}
              onChange={handlepricerange}
            >
              <option>All</option>
              <option>Below $500</option>
              <option>$500 - $1000</option>
              <option>$1000 - $2000</option>
              <option>$2000 and more</option>
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
      <div className="store-items-container w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3  overflow-auto p-3">
        {_productlist.length !== 0
          ? _productlist.map((item) => {
              return <Item key={item.id} {...item} />;
            })
          : !pricerange
          ? "Loading..."
          : "No Products belonging in this price range"}
      </div>
    </section>
  );
};

export default StoreItems;
