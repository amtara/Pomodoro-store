import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productListSelector } from "../redux/admin/productSlice";
import { Link } from "react-router-dom";
import Promotion from "./Promotion";
import Navbar from "./Navbar";
import Footer from "./Footer";
function AllProduct() {
  const dispatch = useDispatch();
  const { data } = useSelector(productListSelector);
  console.log(data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <Promotion />
      <Navbar />
      <div className=" sm:px-20 lg:px-32 py-5 px-5">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((item) => (
            <Link to={`/product/${item._id}`} key={item._id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-[5/4]">
                <img
                  src={item?.img[0]}
                  alt={item.title}
                  className="w-full h-full object-center  group-hover:opacity-75 object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm font-[1100] text-gray-700">
                {item.title}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                CHF {item.price} .-{" "}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AllProduct;
