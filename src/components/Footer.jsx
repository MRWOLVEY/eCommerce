import React from "react";
import { assets } from "../../public/assets/frontend_assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
      <div className="">
        <img src={assets.logo} alt="logo" className="mb-5 w-32" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam
          voluptate cum facilis quia, eos assumenda distinctio est neque,
          incidunt amet reprehenderit odit ducimus consequatur deserunt nemo
          porro? Provident, suscipit.
        </p>
      </div>
      <div className="">
        <p className="text-xl font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="#policy">Privacy Policy</Link>
        </ul>
      </div>
      <div className="">
        <p className="text-xl font-medium mb-5">Get In Touch</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+2-222-555-1110</li>
          <li>contact@forever.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
