import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section>
      <h1 className="text-white text-2xl m-8 mx-auto items-center text-center uppercase">
        Buy Your favorite products
      </h1>
      <ul className="m-0 p-0 list-none">
        <ProductItem
          title="test"
          price="20.0000"
          description="loreml orem lorem lorem lorem"
        />
      </ul>
    </section>
  );
};

export default Products;
