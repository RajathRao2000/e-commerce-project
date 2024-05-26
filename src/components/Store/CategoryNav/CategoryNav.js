import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/redux/uiSlice";
const activeNav = "bg-gray-200 font-semibold";

const CategoryNav = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const showCategoryNav = useSelector((state) => state.ui.showCategory);
  const view = useSelector((state) => state.ui.showCategory);

  const viewNav = (bool) => {
    dispatch(uiActions.setShowCategory(bool));
  };

  async function getCategories() {
    const res = await axios.get("https://dummyjson.com/products/category-list");
    setCategories([...res.data]);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className={`categories-bg z-[1] fixed top-0 left-0 h-screen flex  transition-colors ${
        showCategoryNav ? "bg-black/[0.8] w-full" : "bg-black/[0.4] w-0"
      } duration-200`}
      onClick={(e) => {
        // e.stopPropagation()
        if ((e.target.className + "").includes("categories-bg")) {
          viewNav(false);
        }
      }}
    >
      <nav
        className={`${
          showCategoryNav ? "w-[300px]" : " w-0"
        }  bg-[#fff] z-1 h-full fixed flex flex-col transition-[width] duration-200 overflow-auto `}
      >
        <div className="categories-header flex justify-between p-3">
          <h1 className=" text-xl font-semibold">Select a Category</h1>
          <button
            onClick={(e) => {
              e.stopPropagation();
              viewNav(false);
            }}
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {categories.map((category) => {
          let temp = category.split("");
          temp[0] = temp[0].toUpperCase();
          let capitalize = temp.join("");
          return (
            <div key={Math.random()} className="link-container p-1 flex  ">
              <Link
                className={`p-1 pl-5 w-full rounded-lg hover:bg-gray-200 ${
                  router.query.category === category ? activeNav : ""
                } `}
                href={`/store/${category}`}
                onClick={(e) => {
                  e.stopPropagation();
                  viewNav(false);
                }}
              >
                {capitalize}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default CategoryNav;
