import React, { useEffect, useContext, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { ShopContext } from '../contexts/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import { toast } from 'react-toastify'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, state, dispatch, actions } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const location = useLocation()

  const fetchProduct = async () => {
    setLoading(true)
    setError(false)
    await products.map((item) => {
      if (item._id == productId) {
        setProductData(item)
        setImage(item.image[0])
      }
    })
    setLoading(false)
  }

  useEffect(() => {
    fetchProduct()
  }, [productId, products])

  useEffect(() => {
    setSize('')
  }, [location])

  const handleAddToCart = (data, size) => {
    size ? dispatch({ type: actions.addToCart, payload: { id: data._id, price: data.price, size: size } }) : toast.error('Please select a size')
  }

  return loading ? (
    <div className="col-span-2 md:col-span-3 lg:col-span-4 text-center text-gray-500 text-lg">loading</div>
  ) : productData ? (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex shrink-0 cursor-pointer" />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* product details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-1">
            {/* rating stars and count */}
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <p className="pls-2">(122)</p>
          </div>
          {/* currency and price */}
          <p className="mt-2 text-2xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-2 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(productData, size)}
            className="bg-black text-white text-xs px-8 py-3 active:bg-gray-700 rounded-sm shadow-lg shadow-gray-500"
          >
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery</p>
            <p>Easy return and exchange within 30 days</p>
          </div>
        </div>
      </div>
      {/* description and review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure, ipsam beatae obcaecati atque mollitia dolores temporibus incidunt
            cupiditate distinctio ea asperiores necessitatibus esse eos vero quas molestiae fugit consequatur.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur quo consequuntur! Nobis eaque, odio, nam dolores quibusdam
            totam, maxime atque facere non error accusamus molestiae corporis quae placeat? Sequi.
          </p>
        </div>
      </div>
      {/* realated products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : null
}

export default Product
