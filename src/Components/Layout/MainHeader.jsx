import React from "react";
import CartButton from "../Cart/CartButton";

const MainHeader = () => {
  return (
    <header className="w-full h-20 flex px-[10%] items-center justify-between bg-gray-700">
      <h1 className="text-white text-2xl">Redux Cart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
