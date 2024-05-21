import React from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "@/redux/store";
import Footer from "../Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Header />
        <Body>
          <main>{children}</main>
        </Body>
        <Footer />
      </Provider>
    </>
  );
};

export default RootLayout;
