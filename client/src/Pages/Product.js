import { Add, FamilyRestroomSharp, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Promotion from "../components/Promotion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../utils/requestMethod";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  padding: 10px 30px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: gray;
  font-weight: 200;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const ContentProduct = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const ColorShow = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const Option = styled.option``;

const AddProduct = styled.div`
  display: flex;
  align-items: center;
`;

const IncreaseD = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  border: 1px solid #b1b1b1;
  padding: 0px 15px 1px;
`;

const Quantity = styled.span`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [image, setImage] = useState();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = () => {
      publicRequest
        .get("http://localhost:5007/api/products/find/" + id)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    };
    getProducts();
    size && setDisable(false);
  }, [id, size, color]);

  const handleQuantity = (type) => {
    if (type === "des") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const productTilte = useSelector((state) => state.cart.title);
  console.log(productTilte);
  const handleClick = () => {
    if (!size) {
      toast.warn(
        "Veuillez sélectionner des options du produit avant de l’ajouter à votre panier."
      );
      setDisable(true);
    } else {
      setDisable(false);
      dispatch(addProduct({ ...product, quantity, color, size }));
      toast.success("Ce produit à bien été ajouter au panier");
    }
  };

  return (
    <div>
      <Navbar />
      <Promotion tile="bénéficier d'une reduction de 20 %" />
      <div className="xl:flex xl:justify-center">
        <div className="flex flex-col md:flex-row p-[0px] xl:w-[1200px] my-[50px]">
          <div className="md:flex-col gap-y-[20px] mr-[20px] hidden md:flex">
            {Array.isArray(product?.img) &&
              product?.img.map((item) => (
                <div onClick={() => setImage(item)}>
                  <img
                    src={item}
                    alt=""
                    className="h-[100px] w-[100px] cursor-pointer object-cover"
                  />
                </div>
              ))}
          </div>
          <ImgContainer>
            {Array.isArray(product?.img) && (
              <Image src={image ? image : product?.img[0]} />
            )}
          </ImgContainer>
          <Info>
            <h1 className="text-4xl sm:mt-0 mt-10">{product.title}</h1>
            <Desc>{product.desc}</Desc>
            <Price>CHF {product.price}.-</Price>
            <ContentProduct>
              <Filter>
                <FilterTitle>Couleur</FilterTitle>
                {product.color?.map((c) => (
                  <ColorShow color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Taille</FilterTitle>
                <FSize onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((size) => (
                    <Option key={size}>{size}</Option>
                  ))}
                </FSize>
              </Filter>
            </ContentProduct>
            <AddProduct>
              <IncreaseD>
                <Remove fontSize="2" onClick={() => handleQuantity("inc")} />
                <Quantity>{quantity}</Quantity>
                <Add fontSize="2" onClick={() => handleQuantity("des")} />
              </IncreaseD>
              <button
                className={`${
                  disable
                    ? "px-8 py-3 text-white bg-gray-300 focus:outline-none inline-flex ml-2 cursor-not-allowed"
                    : "px-8 py-3 text-white bg-black focus:outline-none inline-flex ml-2 transition-color hover:bg-blue-300 duration-200"
                }`}
                onClick={() => handleClick()}
              >
                Ajouter au panier
              </button>
              <Link to="/cart">
                <ToastContainer />
              </Link>
            </AddProduct>
          </Info>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
