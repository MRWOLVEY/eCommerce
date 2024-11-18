import React from "react";
import { assets } from "../../public/assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div
      id="lol"
      className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700"
    >
      <div>
        <img
          src={assets.exchange_icon}
          alt="exhange"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold uppercase">easy exhange policy</p>
        <p className="text-gray-400">we offer hassle-free exchange policy</p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          alt="exhange"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold uppercase">7 days return policy</p>
        <p className="text-gray-400">we offer 7-days free return policy</p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="exhange"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold uppercase">24/7 customer support</p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
