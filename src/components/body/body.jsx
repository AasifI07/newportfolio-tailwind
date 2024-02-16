import React from "react";

import Primarybutton from "../primarybutton/primarybutton";
import bodyimg from "..//../assets/bodyimg.png";

import image from "..//../assets/wpp.png";
import image2 from '..//../assets/linkedin.png';
import image3 from '../../assets/link.png';

const arr = [image,image2,image3]
const PrimaryButton = [
  {
    imgg:image,
    title: "FALE COMIGO",
  },
];

function Body() {
  return (
    <div className="bg-black ">
     
        <div className="flex flex-col-reverse md:flex-row">
          <div className="ml-10 pl-5 text-center md:pr-20 mr-20 md:p-20 md:ml-40 mt-5 mb-5 text-24px text-white 600 ">
            <h4 className="md:size-24px font-light m-4">Meu nome é</h4>
            <h2 className="md:size-36px font-extrabold m-4">ALUNO TRILHAS</h2>
            <h3 className="md:size-24px font-semibold m-4">DESENVOLVEDOR FULLSTACK EM FORMAÇÃO</h3>
            <div className="sm:mr-10 ml-10  sm:mb-5 rounded-md pr-10 mr-10 mt-5 md:rounded-md md:mt-10 bg-amber-500 ">
              {PrimaryButton?.map((item) => (
               <div key={item?.title}>
                  <Primarybutton  imgg={item?.imgg} title={item?.title} />
                  </div>
              ))} 
            </div>
            
          </div>
          <div className="flex justify-center mt-5 ml-5 pr-5">
              <img src={bodyimg} alt="bodyimg" className="sm:ml-5 mr-5" />
            </div>
        </div>
      </div>

  );
}
 
export default Body;
