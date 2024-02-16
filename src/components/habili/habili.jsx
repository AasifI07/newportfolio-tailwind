import React from "react";

import habiliimg from "..//../assets/habiliimg.png";

function Habili() {
  return (
    <div className="bg-gray-800 w-100%">
      <div className="sm:flex flex-reverse pb-28 pt-20 md:flex justify-between text-white pr-25">
        <div>
          <h2 className="sm: text-4xl sm:ml-10 pt-10 sm:font-extrabold md:text-4xl pr-10 w-50% text-center m-5 font-extrabold">
            Habilidadades
          </h2>
          <p className="sm:font-normal m-5 p-10 text-14px md:font-normal mr-10 ml-10 pr-40 pl-20 text-14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
            sapien molestie, dictum turpis quis, euismod felis. Duis hendrerit
            lacus eu quam pharetra, a hendrerit massa sodales. Curabitur lacinia
            leo nisl, sit amet suscipit turpis mollis in.
          </p>
        </div>
        <div className=" sm:ml-32 sm:mb-10 mt-20 md:mr-20 md: ml-20 w-352px h-209px sm:mt-36 pr-36 pt-30 pb-30">
          <img src={habiliimg} />
        </div>
      </div>
    </div>
  );
}

export default Habili;
