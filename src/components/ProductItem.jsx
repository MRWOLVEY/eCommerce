import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ _id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${_id}`}>
      <div className="overflow-hidden rounded">
        <img className="hover:scale-110 transition duration-300 ease-in-out" src={image[0]} />
      </div>
      <div className="h-[4.8rem] flex flex-col justify-between">
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  )
}

export default ProductItem
