import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      // Filter products based on category and subCategory
      let relatedProducts = []
      relatedProducts = products.filter((item) => {
        return item.category === category && item.subCategory === subCategory
      })
      setRelated(relatedProducts.slice(0, 5)) // Limit to 5 related products
    }
  }, [products])
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title t1={'related'} t2={'products'} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
