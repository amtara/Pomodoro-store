import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDataUpdateProduct,
  productUpdateSelector,
  updateProduct,
} from "../redux/admin/updateProductSlice";
import { getProducts } from "../redux/admin/productSlice";

const EditProduct = ({ isVisible, onOpen, product }) => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(productUpdateSelector);
  const [title, setTitle] = useState(product?.title);
  const [price, setPrice] = useState(product?.price);
  const [img, setImg] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [img1, setImg1] = useState(product?.img[0]);
  const [img2, setImg2] = useState(product?.img[1]);
  const [img3, setImg3] = useState(product?.img[2]);
  const [img4, setImg4] = useState(product?.img[3]);
  const [desc, setDesc] = useState(product?.desc);
  const [cat, setCat] = useState(product?.cat);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let imgs = [];
    img1 && imgs.push(img1);
    img2 && imgs.push(img2);
    img3 && imgs.push(img3);
    img4 && imgs.push(img4);
    const dataForm = {
      id: product?._id,
      title,
      categories: [cat],
      price,
      desc,
      img: imgs,
    };
    if (!title && !cat && !price && !desc && !img1) {
      setErrorMessage("Veuillez remplir tout les champs");
    } else {
      setErrorMessage("");
      dispatch(updateProduct(dataForm));
    }

    console.log("data update", dataForm);
  };

  useEffect(() => {
    setTitle(product?.title);
    setDesc(product?.desc);
    setImg1(product?.img[0]);
    setImg2(product?.img[1]);
    setImg3(product?.img[2]);
    setImg4(product?.img[3]);
    setPrice(product?.price);
    setCat(product?.cat);

    if (Object.keys(data).length != 0) {
      onOpen();
      dispatch(getProducts());
      dispatch(clearDataUpdateProduct());
    }
  }, [data, product]);

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
                <form onSubmit={handleUpdateProduct} action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Modifier le Produit
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
                            defaultValue={title}
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
                            defaultValue={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Votre description"
                          ></textarea>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="desc"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Définir une catégorie
                          </label>
                          <input
                            id="cat"
                            type="text"
                            name="cat"
                            defaultValue={cat}
                            onChange={(e) => setCat(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Votre catégorie"
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
                            defaultValue={img1}
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
                            name="img2"
                            id="img2"
                            defaultValue={img2}
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
                            name="img3"
                            id="img3"
                            defaultValue={img3}
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
                            name="img4"
                            id="img4"
                            defaultValue={img4}
                            onChange={(e) => setImg4(e.target.value)}
                            placeholder="http://url4.png"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-4">
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
                            defaultValue={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
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

export default EditProduct;
