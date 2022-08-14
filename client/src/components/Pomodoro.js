import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Promotion from "./Promotion";

export default function Pomodoro() {
  return (
    <div>
      <Promotion />
      <Navbar />

      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                <span className="text-red-500">Pomodoro</span> un rêve devenue
                réalité
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Pomodoro… un rêve qui se réalise.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://pomodoro.store/wp-content/uploads/2021/08/dsc00446.jpg-scaled.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://pomodoro.store/wp-content/uploads/2021/12/img_7990-scaled.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://pomodoro.store/wp-content/uploads/2021/08/dsc00326.jpg-scaled.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://pomodoro.store/wp-content/uploads/2021/06/00f4cd02-fefb-4917-889f-8f5c17062ab3.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://pomodoro.store/wp-content/uploads/2022/05/img_1050-1-scaled.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://pomodoro.store/wp-content/uploads/2021/05/img_0239-1-scaled.jpeg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://pomodoro.store/wp-content/uploads/2020/08/DSC08618-scaled.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/shop"
                  className="inline-block text-center bg-black rounded py-3 px-8 font-medium text-white hover:bg-red-700"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <h3 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Notre histoire
          </h3>
          <p className="mt-4 text-xl mb-20 text-gray-500">
            Pomodoro… un rêve qui se réalise. Un homme qui a quitté son pays
            natal pour l’Italie, où il travailla dans les champs de tomate avec
            l’ambition de rejoindre la Suisse un jour. Malgré les moments
            difficiles et les nuits passées sous les camions pour éviter la
            pluie, il n’a jamais perdu l’espoir d’un avenir meilleur pour ses
            enfants.
          </p>

          <h3 className="text-4xl mt-4 mb-10 font font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nos valeurs
          </h3>
          <p className=" text-xl text-gray-500">
            La marque Pomodoro se veut d’être en accord avec des valeurs
            éthiques et éco-responsables. Nos fournisseurs sont triés sur le
            volet afin de satisfaire à ces exigences. La qualité et la
            durabilité sont les vecteurs de notre marque.
            <br /> <br />
            Les T-shirts de la collection sont certifiés et labellisés. Ils
            possèdent notamment la certification GOTS. Le coton est 100% BIO et
            les tissus utilisés sont BIO ou recyclés.
            <br />
            <br />
            Nous sommes soucieux d’apporter une dimension sociale et locale à
            l’élaboration de nos vêtements. Pour la confection de la broderie,
            nous collaborons avec le Foyer-Handicap de Genève.
          </p>
        </div>
      </div>
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
}
