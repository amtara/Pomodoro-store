import img1 from "../assets/2certification-1.jpeg";
import img2 from "../assets/OEKO-TEX-2048x1048.png";
import img3 from "../assets/white_2D00_vegan_2D00_logo.jpeg";
import img4 from "../assets/FAIRWEAR-COL.png";

import React from "react";

const CertificatList = () => {
  return (
    <ul
      role="list"
      className="grid px-[20px] md:px-[200px] grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <img
        src={img1}
        alt=""
        className="object-contain h-[200px] w-[200px] pointer-events-none group-hover:opacity-75"
      />
      <img
        src={img2}
        alt=""
        className="object-contain h-[200px] w-[200px] pointer-events-none group-hover:opacity-75"
      />
      <img
        src={img3}
        alt=""
        className="object-contain h-[200px] w-[200px] pointer-events-none group-hover:opacity-75"
      />
      <img
        src={img4}
        alt=""
        className="object-contain h-[200px] w-[200px] pointer-events-none group-hover:opacity-75"
      />
    </ul>
  );
};

export default CertificatList;
