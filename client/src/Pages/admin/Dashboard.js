import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrder, orderSelector } from "../../redux/admin/commandSlice";
import {
  getProducts,
  productListSelector,
} from "../../redux/admin/productSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dataCommand = useSelector(orderSelector);
  const dataProduct = useSelector(productListSelector);

  useEffect(() => {
    dispatch(getOrder());
    dispatch(getProducts());
  }, []);

  return (
    <div className="p-[20px]">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="px-4 py-5 bg-indigo-800 shadow rounded-lg overflow-hidden sm:p-6">
          <div className="text-sm font-medium text-white truncate">
            <Link to="/admin/command" className="pointer">
              Commandes
            </Link>
          </div>
          <dd className="mt-1 text-3xl font-semibold text-white">
            {dataProduct.data.length}
          </dd>
        </div>
        <div className="px-4 py-5 bg-yellow-800 shadow rounded-lg overflow-hidden sm:p-6">
          <div className="text-sm font-medium text-white truncate">
            <Link to="/admin/products">Produits</Link>
          </div>
          <div className="mt-1 text-3xl font-semibold text-white">
            {dataCommand.data.length}
          </div>
        </div>
      </dl>
    </div>
  );
};

export default Dashboard;
