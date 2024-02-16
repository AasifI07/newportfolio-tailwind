import React from "react";

import Primarybutton from "../primarybutton/primarybutton";
import image2 from "..//../assets/linkedin.png";
import image3 from "..//../assets/link.png";
import image from "..//../assets/circle.png";
const PrimaryButton = [
  {
    imgg: image2,
    title: "Linkedin",
  },
  {
    imgg: image3,
    title: "Curriculo",
  },
];

function Hero() {
  return (
    <div className="bg-zinc-800 ">
      <div className="flex-flex-row-reverse pb-5 pt-5 md:flex">
        <div className=" mb-10 mr-10 pr-24 sm:pl-10 w-402px md:ml-40 mt-40 pt-40  pl-40 ">
          <img src={image} />
        </div>

        <div className="  sm:pt-20 text-center md: text-white mb-20 pb-10 mt-20 font-light">
          <div className=" mr-3 mb-20 text-center md:text-white m-10 p-10 font-light">
            <h2 className=" p-10 mt-20 md:text-white font-extrabold">
              Sobre Mim
            </h2>
            <p className="font-light pl-20 mr-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
              sapien molestie, dictum turpis quis, euismod felis. Duis hendrerit
              lacus eu quam pharetra, a hendrerit massa sodales. Curabitur
              lacinia leo nisl, sit amet suscipit turpis mollis in.
              <br /> Pellentesque nulla arcu, fermentum ultrices ipsum at,
              suscipit fermentum mauris. Suspendisse potenti. Aenean vel
              sagittis velit. Ut et facilisis tellus, eu ornare leo.
            </p>
          </div>

         <div>
         <div className=" sm:flex flex-wrap ml-20 sm:mr-10 sm:pr-20 sm:pl-5 pr-5 gap-5 md: flex md:flex-nowrap rounded-md mb-5 content-evenly mr-20 h-10 w-auto pb-20">
            {PrimaryButton?.map((item) => (
              <div key={item?.title} >
                <Primarybutton imgg={item?.imgg} title={item?.title} />
              </div>
            ))}
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
