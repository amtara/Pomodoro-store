import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ConfirmDeleteProduct from "./ConfirmDeleteProduct";
import EditProduct from "../../components/EditProduct";
import {
  getProducts,
  productCreateSelector,
  productListSelector,
} from "../../redux/admin/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(productListSelector);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleOpenEdit = (product) => {
    setIsEditModal(!isEditModal);
    setSelectedProduct(product);
  };

  const handleOpenDelete = (product) => {
    setIsDeleteModal(!isDeleteModal);
    setSelectedProduct(product);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <AddProduct
        isVisible={isVisible}
        onOpen={() => setIsVisible(!isVisible)}
      />
      <EditProduct
        isVisible={isEditModal}
        onOpen={() => setIsEditModal(!isEditModal)}
        product={selectedProduct}
      />
      <ConfirmDeleteProduct
        open={isDeleteModal}
        setOpen={() => setIsDeleteModal(!isDeleteModal)}
        product={selectedProduct}
      />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Produits</h1>
          <p className="mt-2 text-sm text-gray-700">Liste des produits</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={() => setIsVisible(!isVisible)}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Ajouter un produits
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Nom
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Prix
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Categorie
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((product) => (
                    <tr key={product._id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <img
                          src={product.img[0]}
                          className="w-[50px] h-[50px] object-cover"
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {product.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.desc.substring(0, 50)} ...
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.price}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product?.categories[0]}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          onClick={() => handleOpenEdit(product)}
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Modifier
                        </a>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          onClick={() => handleOpenDelete(product)}
                          href="#"
                          className="text-red-600 hover:text-indigo-900"
                        >
                          Supprimer
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
