import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  clearDataAddProduct,
  productCreateSelector,
} from "../../redux/admin/productSlice";

const AddProduct = ({ isVisible, onOpen }) => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(productCreateSelector);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [cat, setCat] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const createProduct = (e) => {
    e.preventDefault();
    let imgs = [];
    img1 && imgs.push(img1);
    img2 && imgs.push(img2);
    img3 && imgs.push(img3);
    img4 && imgs.push(img4);
    const dataForm = {
      title,
      price,
      desc,
      size,
      color,
      img: imgs,
      categories: [cat],
    };

    if (!title && !price && !desc && !img1) {
      setErrorMessage("Veuillez remplir tout les champs");
    } else {
      setErrorMessage("");
      dispatch(addNewProduct(dataForm));
      setColor([]);
      setSize([]);
    }
  };

  const handleSetColor = (value) => {
    if (color.includes(value)) {
      const index = color.indexOf(value);
      const newColor = color.slice(0, index);
      setColor(newColor);
    } else {
      setColor((color) => [...color, value]);
    }
  };

  const handleSetSize = (value) => {
    if (size.includes(value)) {
      const index = size.indexOf(value);
      const newSize = size.slice(0, index);
      setSize(newSize);
    } else {
      setSize((size) => [...size, value]);
    }
  };

  useEffect(() => {
    if (Object.keys(data).length != 0) {
      onOpen();
      dispatch(clearDataAddProduct());
    }
  }, [data, color, size]);

  console.log("error", error, "data", data);

  return (
    <Transition.Root show={isVisible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <form onSubmit={createProduct} action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Information du Produit
                        </h3>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nom du produit
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={(e) => setTitle(e.target.value)}
                            autoComplete="given-name"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="desc"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <textarea
                            id="desc"
                            rows="4"
                            name="desc"
                            onChange={(e) => setDesc(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your description..."
                          ></textarea>
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ajouter une categorie de produit
                          </label>
                          <input
                            type="text"
                            name="cat"
                            id="cat"
                            onChange={(e) => setCat(e.target.value)}
                            autoComplete="given-name"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="img"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Url de l'image
                          </label>
                          <input
                            type="text"
                            name="img"
                            id="img"
                            onChange={(e) => setImg1(e.target.value)}
                            placeholder="http://url.png"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="img1"
                            className="block text-sm font-medium text-gray-700"
                          >
                            deuxième url de l'image(optional)
                          </label>
                          <input
                            type="text"
                            name="img1"
                            id="img1"
                            onChange={(e) => setImg2(e.target.value)}
                            placeholder="http://url2.png"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="img2"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Troixième url image(optional)
                          </label>
                          <input
                            type="text"
                            name="img2"
                            id="img2"
                            onChange={(e) => setImg3(e.target.value)}
                            placeholder="http://url3.png"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="img3"
                            className="block text-sm font-medium text-gray-700"
                          >
                            quartrième url image(optional)
                          </label>
                          <input
                            type="text"
                            name="img3"
                            id="img3"
                            onChange={(e) => setImg4(e.target.value)}
                            placeholder="http://url4.png"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Prix
                          </label>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <fieldset className="col-span-6">
                          <legend className="sr-only">
                            Choisir les tailles pour ce produits
                          </legend>
                          <div
                            className="text-base font-medium text-gray-900"
                            aria-hidden="true"
                          >
                            Choisir les tailles pour ce produits
                          </div>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  id="comments"
                                  name="comments"
                                  type="checkbox"
                                  onChange={() => handleSetSize("S")}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="comments"
                                  className="font-medium text-gray-700"
                                >
                                  S
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  onChange={() => handleSetSize("L")}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="candidates"
                                  className="font-medium text-gray-700"
                                >
                                  L
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="offers"
                                  name="offers"
                                  type="checkbox"
                                  onChange={() => handleSetSize("M")}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="offers"
                                  className="font-medium text-gray-700"
                                >
                                  M
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="offers"
                                  name="offers"
                                  type="checkbox"
                                  onChange={() => handleSetSize("XL")}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="offers"
                                  className="font-medium text-gray-700"
                                >
                                  XL
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="col-span-6">
                          <legend className="sr-only">
                            Choisir les couleurs pour ce produits
                          </legend>
                          <div
                            className="text-base font-medium text-gray-900"
                            aria-hidden="true"
                          >
                            Choisir les couleurs pour ce produits
                          </div>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  id="comments"
                                  name="comments"
                                  type="checkbox"
                                  onChange={() => handleSetColor("white")}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="comments"
                                  className="font-medium text-gray-700"
                                >
                                  Blanc
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  onChange={() => handleSetColor("black")}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="candidates"
                                  className="font-medium text-gray-700"
                                >
                                  Noir
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="offers"
                                  name="color"
                                  type="checkbox"
                                  onChange={() => handleSetColor("bleu")}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="offers"
                                  className="font-medium text-gray-700"
                                >
                                  Bleu
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="offers"
                                  name="color"
                                  type="checkbox"
                                  value="green"
                                  onChange={() => handleSetColor("green")}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="offers"
                                  className="font-medium text-gray-700"
                                >
                                  Vert
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    {errorMessage && (
                      <p className="text-red-500">{errorMessage}</p>
                    )}
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {status == "loading" && (
                          <Box sx={{ color: "#fff" }}>
                            <CircularProgress
                              color="inherit"
                              size={20}
                              className="mr-[10px]"
                            />
                          </Box>
                        )}
                        Enregistrer
                      </button>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddProduct;
