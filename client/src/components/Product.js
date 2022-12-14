import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <Link to={`/product/${item._id}`} key={item._id} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-[5/4]">
        <img
          src={item?.img[0]}
          alt={item.title}
          className="w-full h-full object-center  group-hover:opacity-75 object-cover"
        />
      </div>
      <h3 className="mt-4 text-sm font-[1100] text-gray-700">{item.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        CHF {item.price} .-{" "}
      </p>
    </Link>
  );
};
export default Product;
