import styled from "styled-components";
import Promotion from "../components/Promotion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { publicRequest } from "../utils/requestMethod";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/cartSlice";
const Container = styled.div``;

const size = {
  mobile: "425px",
  tablet: "850px",
  laptop: "1024px",
  desktop: "2560px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

const Wrapper = styled.div`
  padding: 20px 0;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const ShopBtn = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px;
  border: 1px solid lightgray;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  @media ${device.mobile} {
    width: 70px;
    height: 70px;
  }
`;

const Details = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  @media ${device.tablet} {
    font-size: 13px;
  }
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ProductSize = styled.span`
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media ${device.tablet} {
    margin-bottom: 0px;
  }
`;

const Quantity = styled.div`
  font-size: 16px;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  width: 300px;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 220px;
  @media ${device.tablet} {
    position: absolute;
    bottom: -150px;
    width: 100%;
    height: 150px;
    background-color: #fff;
  }
`;

const TitleItem = styled.h1`
  font-weight: 200;
`;

const Item = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  @media ${device.tablet} {
    margin: 10px 0px;
  }
`;

const Total = styled.span``;

const Price = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const [stripeTok, setStripeTok] = useState(null);
  const cart = useSelector((state) => state.cart);
  const history = useNavigate();
  const dispatch = useDispatch();
  const stripeToken = (token) => {
    setStripeTok(token);
  };

  useEffect(() => {
    const requestStripe = async () => {
      console.log("stripeTok", stripeTok);
      const orderData = {
        user: {
          email: stripeTok.email,
          name: stripeTok.card.name,
        },
        products: cart.products,
        amount: cart.total,
        address: {
          city: stripeTok.card.address_city,
          country: stripeTok.card.address_country,
          billingAddress: stripeTok.card.address_line1,
        },
      };
      console.log("orderData", orderData);
      try {
        const res = await publicRequest.post("/checkout/payement", {
          tokenId: stripeTok.id,
          amount: cart.total * 100,
        });
        const createOrder = await publicRequest.post("/orders", orderData);
        history("/success", { data: res.data });
      } catch (errors) {
        console.log(errors);
      }
    };
    stripeTok && requestStripe();
  }, [stripeTok, cart.total, history]);

  // const testData = cart.products.forEach((element) => console.log(element));

  return (
    <Container>
      <Navbar />
      <Promotion title="10% de réduction sur votre première commande" />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Wrapper>
          <Title>Votre panier</Title>
          <Top>
            <Link to="/shop">
              <ShopBtn>Shop</ShopBtn>
            </Link>

            <TopTexts>
              <TopText>Nombre d'article({cart.quantity})</TopText>
            </TopTexts>
          </Top>
          <Bottom>
            <Info>
              <Hr />
              {cart.products.map((product) => (
                <Product>
                  <ProductDetail>
                    <Image src={product.img[0]} />
                    <Details>
                      <ProductName>
                        {" "}
                        <span className="font-extrabold"> Titre:</span>{" "}
                        {product.title}
                      </ProductName>

                      <ProductColor color={product.color} />

                      <Quantity>
                        <span className="font-extrabold"> Quantité:</span>{" "}
                        {product.quantity}
                      </Quantity>
                      <ProductSize>
                        <span className="font-extrabold"> Taille:</span>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer></ProductAmountContainer>
                    <ProductPrice>
                      CHF {product.price * product.quantity}.-
                    </ProductPrice>
                  </PriceDetail>
                  <button
                    className="px-10"
                    onClick={() => dispatch(deleteProduct({ id: product._id }))}
                  >
                    X
                  </button>
                </Product>
              ))}
            </Info>
            <Summary>
              <TitleItem>Détail de la commande</TitleItem>
              <Item>
                <Total>Total</Total>
                <Price>CHF {cart.total}.-</Price>
              </Item>
              <StripeCheckout
                name="Pomodoro Store"
                image="https://test-pomodoro.hm-dev.com/wp-content/uploads/2020/08/image1-removebg-preview-e1597251215323.png"
                billingAddress
                shippingAddress
                description={`Votre total est de CHF${cart.total}.-`}
                amount={cart.total * 100}
                token={stripeToken}
                stripeKey={
                  "pk_test_51HLvgbEVFMEdPHEvhRe5F310xnoovdGXWvVA7OEARRYRiEmnnvwSIGKunkbqICy2vMktY7pLGV6xWlf1vWlK9lGC00kL9TrSMc"
                }
              >
                <Button>Procéder au payement</Button>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
      </div>
      <Footer />
    </Container>
  );
};

export default Cart;
