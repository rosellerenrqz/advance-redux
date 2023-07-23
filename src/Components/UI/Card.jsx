import React from "react";

const Card = (props) => {
  return (
    <section className="m-8 mx-auto p-4 w-[90%] max-w-2xl bg-white rounded-xl">
      {props.children}
    </section>
  );
};

export default Card;
