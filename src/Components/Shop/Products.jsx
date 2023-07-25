import React from "react";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "product1",
    title: "Apple",
    description: "yummy apple my tummy",
    price: 50,
  },
  {
    id: "product2",
    title: "Orange",
    description: "yummy orange my tummy",
    price: 20,
  },
  {
    id: "product3",
    title: "Mango",
    description: "yummy Mango my tummy",
    price: 30,
  },
  {
    id: "product4",
    title: "Banana",
    description: "yummy Banana my tummy",
    price: 15,
  },
];

const Products = () => {
  return (
    <section>
      <h1 className="text-white text-2xl m-8 mx-auto items-center text-center uppercase">
        Buy Your favorite products
      </h1>
      <ul className="m-0 p-0 list-none">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
