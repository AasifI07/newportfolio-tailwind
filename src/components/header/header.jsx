import React from "react";
import icon from "..//../assets/switch.png";
import menu from "..//../assets/menu.png";

function Header() {
  return (
    <div>
      <div className="  md:bg-gray bg-gray-800 flex justify-end">
        <div className="hidden md:flex p-6 mr-20 gap-10 size-24px 400 text-white ">
          <div>Sobre Mim</div>
          <div>Projetos</div>
          <div>Skills</div>
          <div>Educação</div>
        </div>

        <div className="flex items-center m-100% justify-spacebetween width-auto">
          <img
            className="  mr-60 size-20 md:size-20 pl-10px ml-26px"
            src={icon}
            alt="icon"
          />
          <img
            className="p-5 m-5 flex justify-between md:hidden"
            src={menu}
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
