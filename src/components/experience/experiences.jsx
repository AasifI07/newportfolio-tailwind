import React from "react";
import Expimg1 from "../../assets/expimg1.png";
import Expimg2 from "../../assets/expimg2.png";

function Experiences() {
  return (
    <div>
      <div className="bg-black ">
        <div className="sm: flex md:flex-reverse ">
          <img className="sm:mr-10 w-50% pt-10 md:" src={Expimg2} alt="Experience Image" />
          <h1 className="sm: text-white font-extrabold mr-30 md:pt-10 pr-40 pb-20 mt-20 md:ml-20">
            Educação e Experiencias
          </h1>
        </div>
        <div className="sm:flex sm:flex-row-reverse sm:mr-10 sm:ml-10 bg-gray-800 md:ml-60 mt-10 pl-10 mr-20  gap-5 flex flex-col">
          <div className="sm: ml-10 pl-10 md: pr-5 mr-5 md:ml-10">
            <h3 className="sm: text-white font-bold">
              Programa Trilhas Inova | SECTIMA
            </h3>
            <p className="sm: text-white ml-5 mt-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
              sapien molestie, dictum turpis quis, euismod felis.
            </p>
          </div>
          <div className="sm: ml-10 pl-10 md: pr-5 mr-5 md:ml-10">
            <h3 className="sm: text-white font-bold">
              Programa Trilhas Inova | SECTIMA
            </h3>
            <p className="sm: text-white ml-5 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
              sapien molestie, dictum turpis quis, euismod felis.
            </p>
          </div>
        </div>
        <div className=" sm:flex flex-col pb-5 sm:mr-10 bg-gray-800 md:pl-10  mt-10 ml-20 gap-5 flex md:flex-row-reverse ">
          <div className="sm: ml-10 pt-10 md: pr-5 mr-5 md:ml-10 ">
            <h3 className="sm: text-white font-bold">
              Programa Trilhas Inova | SECTIMA
            </h3>
            <p className="sm: text-white ml-5 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
              sapien molestie, dictum turpis quis, euismod felis.
            </p>
          </div>
          <div className="sm: ml-10 pl-10 md: pr-5 mr-5 md:ml-10">
            <h3 className="sm: text-white font-bold">
              Programa Trilhas Inova | SECTIMA
            </h3>
            <p className="sm: text-white ml-5 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
              sapien molestie, dictum turpis quis, euismod felis.
            </p>
          </div>
        </div>
        <img
          className="sm:pt-6 pb-5 left-30% w-32% mr-48 sm:ml-10 md:mt-5 md:ml-96 pr-10 md:pl-96"
          src={Expimg1}
        />
      </div>
    </div>
  );
}

export default Experiences;
