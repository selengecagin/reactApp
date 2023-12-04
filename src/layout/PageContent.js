import React from "react";
import ProductsPage from "../pages/ProductsPage";

export default function PageContent({ productList }) {
  return (
    <div>
      <ProductsPage productList={productList} />
    </div>
  );
}
