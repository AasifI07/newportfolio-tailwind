import React from "react";

import aeroimage from "..//../assets/aero.png";

const projectbody = [
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla atrcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
];

function Project() {
  return (
    <div className="bg-black">
      <div className=" text-white sm:font-extrabold sm:text-center text-36px  md:text-white font-extrabold text-center text-48px pt-20  mb-10 ">
        <h1>Projetos</h1>
      </div>
      <div>
        <div className="flex flex-col mr-10 sm:flex-row  pl-5  sm:flex-wrap md:ml-32 md:pl-10 gap-4 text-white">
          {projectbody?.map((item) => (
            <div className="w-96 md:box-border bg-zinc-800 rounded-xl p-20 ">
              <div key={item?.id}>
                <div className="mt-16px text-center text-2xl mb-5 ml-20px">
                  {item.heading}
                </div>
                <div className="mt-20px text-center ml-20px">{item.title}</div>
                <div>
                  <button className="bg-amber-600 text-white mt-6 mb-5 ml-20 p-5 rounded-lg h-fit  ">
                    <p className="text-16px text-center text-extrabold">
                      GitHub
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={aeroimage} className="w-100% md:ml-80 mt-10 pb-10 " />
    </div>
  );
}

export default Project;
