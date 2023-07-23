import React from "react";
import Card from "../UI/Card";

const ProductItem = (props) => {
  const { title, price, description } = props;

  const formattedPrice = Number(price).toFixed(2);

  return (
    <li>
      <Card>
        <header className="flex justify-between items-baseline">
          <h3 className="mt-2 text-xl">{title}</h3>
          <div className="rounded-[30px] py-1 px-6 text-2xl bg-gray-500 text-white">
            {formattedPrice}
          </div>
        </header>
        <p>{description}</p>
        <div className="flex justify-end">
          <button className="py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300">
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
