import ProductPage from "@/components/Store/ProductPage/ProductPage";
import React from "react";
import axios from "axios";

const productpage = (props) => {
  return (
    <div>
      <ProductPage {...props} />
    </div>
  );
};

export default productpage;
