import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [BestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const BestSellers = products.filter((item) => (item.bestseller = true));
    setBestSellers(BestSellers.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title t1={"best"} t2={"sellers"} />
        <p className="w-3/4 m-auto text-xs sm:tect-sm md:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quisquam
          cum. Repellat deleniti voluptatem odit porro odio soluta autem
          possimus accusamus similique neque repudiandae veniam est,
          consequuntur, eos voluptatibus obcaecati.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {BestSellers.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
