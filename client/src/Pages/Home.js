import React, { useState } from "react";
import Promotion from "../components/Promotion";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import CertificatList from "../components/CerticatList";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Promotion />
      <Navbar />
      <Slider />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">
            Pomodoro stoore
          </h2>
          <p className="mt-1 text-4xl font-light text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            A propos
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 font-extralight">
            Nous sommes une marque de Prêt-à-porter genevoise. Désireux
            d’apporter de la fraîcheur dans votre quotidien, nous vous proposons
            des articles de qualité qui respectent nos valeurs éthiques,
            sociales et environnementales. Nos mots d’ordres sont l’élégance, la
            sobriété et la légèreté.
          </p>
        </div>
      </div>
      <div className="text-center  mt-10 mb-10 m-5">
        <h1 className="mt-1 text-4xl font-light text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
          Nouveautés
        </h1>
      </div>

      <div className="lg:px-32">
        <Products />
      </div>
      <div className="text-center mt-20 m-5">
        <h1 className=" text-4xl font-light text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          No certifications
        </h1>
      </div>

      <CertificatList />

      <Footer />
    </div>
  );
}

export default Home;
