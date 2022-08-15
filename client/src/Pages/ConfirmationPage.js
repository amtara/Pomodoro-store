import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotion";
import { Link } from "react-router-dom";
function ConfirmationPage() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Promotion />
      <Navbar />
      <div className="flex justify-center flex-col  items-center w-full h-screen text-center">
        <h1 className="text-3xl font-extrabold mb-3 ">
          Pomodoro vous remerci pour votre commande
        </h1>
        <p className="font-extralight text-2xl mb-5">
          vous recevrez votre dans 2 jours ouvrable{" "}
        </p>
        <Link
          to="/shop"
          className="inline-block text-center bg-black rounded py-3 px-8 font-medium text-white hover:bg-red-700"
        >
          Pomodoro Collection
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmationPage;
