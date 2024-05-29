import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { SearchItem } from "./SearchItem";
const searchicon = (
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
);
const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);

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

  const clearSearch = () => {
    setSearch("");
    setSearchResults([]);
  };

  useEffect(() => {
    let timeouttoken = setTimeout(() => {
      searchQuery(search);
    }, 500);
    return () => {
      clearTimeout(timeouttoken);
    };
  }, [search]);

  return (
    <div className={`search-bar shadow relative `}>
      <input
        name="search"
        id="search"
        className={`p-2 border-2 outline-none border-black focus:border-blue-500  w-full`}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
      />
      <label
        htmlFor="search"
        className={`absolute transition-[font-size,top,left,color] hover:cursor-text ${
          focus ? ` left-[10px] top-[-13px] bg-white text-blue-500 ` : `top-[15%] left-[10px] text-lg text-gray-400`
        }`}
      >
        Search Product
      </label>
      <div
        className={`search left-[-10%] md:left-auto max-w-[400px] sm:w-[400px] ${
          searchResults.length !== 0
            ? "h-auto max-h-[50vh] border-4 border-blue-500 scale-100"
            : " scale-0"
        } transition-transform origin-top-left overflow-auto  rounded-md bg-white absolute shadow-lg results z-10 `}
      >
        {searchResults.map((item) => {
          return <SearchItem key={item.id} {...item} />;
        })}
      </div>
      <button
        className={`absolute p-2 right-2 text-gray-400 hover:text-gray-700 active:tect-black ${
          search ? "" : "hidden"
        }`}
        onClick={clearSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
