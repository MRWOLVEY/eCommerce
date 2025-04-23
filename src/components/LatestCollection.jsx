import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../contexts/ShopContext'
import ProductItem from './ProductItem'
const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title t1={'latest'} t2={'collection'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure reprehenderit recusandae qui. Deleniti consectetur quas, quae ut a,
          necessitatibus, hic animi beatae ab nemo vero soluta perspiciatis earum aliquam sint.
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((product, index) => (
          <ProductItem key={index} _id={product._id} image={product.image} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
