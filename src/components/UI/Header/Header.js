import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CartList from "@/components/Cart/CartMain";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/redux/uiSlice";
import { authActions } from "@/redux/authSlice";
//pathname+"" is used to convert pathname to string because when it is null .includes() cannot be used.
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const active = "border-b-2 text-white";
  const hover = "hover:text-white";
  const cartnotificationStyle = `after:content-[attr(data-quantity)] after:absolute after:top-[-13px] after:right-[-10px] after:bg-blue-500 after:p-[1px] after:rounded-full after:text-base after:flex after:justify-center after:items-center after:w-6 after:h-6`;

  const logoutHandler = () => {
    dispatch(authActions.logoutUser());
    router.replace("/auth/sign-in");
  };

  useEffect(() => {
    //This useeffect is added to avoid error: Text content does not match server-rendered HTML.
    setUserEmail(auth.userData?.email);
  }, [auth.userData?.email]);

  return (
    <div className="relative">
      <CartList />
      <header
        className={`p-4 flex items-center justify-center bg-gradient-to-r from-[#3f3f46] to-gray-900 text-gray-200 sticky w-full`}
      >
        <nav
          className={`flex justify-between items-center gap-3 w-full max-w-6xl h-full`}
        >
          <div className="header-logo relative">
            <button
              onClick={() => router.replace("/")}
              className={` w-9 h-9 p-1 rounded`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {(pathname + "").includes("/store") &&
              (pathname || "").split("/").length <= 3 && (
                <button
                  className="category-menu flex gap-1 absolute top-2 left-12 items-center"
                  onClick={() => dispatch(uiActions.setShowCategory(true))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                    />
                  </svg>
                  <p className="hidden sm:block">Categories</p>
                </button>
              )}
          </div>

          <div className="header-nav space-x-4">
            <Link
              className={`${pathname === "/" ? active : ""} ${hover}`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${
                (pathname + "").includes("/store") ? active : ""
              } ${hover}`}
              href="/store/all"
            >
              Store
            </Link>
            <Link
              className={`${pathname === "/about" ? active : ""} ${hover}`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${pathname === "/contact-us" ? active : ""} ${hover}`}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
          <div className="header-userBtn w-24 relative flex justify-end gap-2">
            {userEmail && (pathname + "").includes("/store") && (
              <button
                onClick={() => dispatch(uiActions.setShowCart(true))}
                className={`cart-btn bg-white bg-opacity-20 w-9 h-9 p-1 rounded relative ${
                  cart.quantity > 0 ? cartnotificationStyle : ""
                }`}
                data-quantity={`${cart.quantity}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            )}
            <button
              onClick={
                userEmail
                  ? logoutHandler
                  : () => router.replace("/auth/sign-in")
              }
              className={` bg-white bg-opacity-20 w-fit h-9 rounded flex items-center gap-1 p-2`}
            >
              {userEmail ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={"w-7"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <p>Logout</p>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={"w-7"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <p>Login</p>
                </>
              )}
            </button>
          </div>
        </nav>
      </header>
      {!userEmail && (pathname + "").includes("/store") && (
        <div className=" bg-yellow-200 text-yellow-700 w-full p-2 text-center">
          Login to add items to cart !
        </div>
      )}
    </div>
  );
};

export default Header;
