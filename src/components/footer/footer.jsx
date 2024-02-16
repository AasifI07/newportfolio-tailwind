import React from "react";

import footerinsta from "../../assets/footerinsta.png";
import footergithub from "../../assets/footergithub.png";
import footerlinkedin from "../../assets/footerlinkedin.png";

function Footer() {
  return (
    <div className="bg-amber-400 mb-10 pb-5">
      <div className="flex flex-row justify-center gap-5">
        <img src={footerinsta} className="mt-10 mb-10 pr-50 " />
        <img src={footergithub} className="mt-10 mb-10 pr-50" />
        <img src={footerlinkedin} className="mt-10 mb-10 pr-50" />
      </div>
    </div>
  );
}

export default Footer;
