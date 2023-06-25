import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1b] text-white py-4 ">
      <div className="container mx-auto flex text-center justify-center items-center">
        <div>
          <h4 className="text-xl font-bold">Cinepedia</h4>
          <p className="text-sm">Powered by TMDB API</p>
          <p className="text-sm">© 2023 Cinepedia. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
