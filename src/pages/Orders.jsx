import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)
  return (
    <div className="border-t pt-14">
      <div className="text-2xl">
        <Title t1="my" t2="orders" />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col justify-start md:flex-row md:items-center gap-4">
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
            </div>
            <div className="min-w-64">
              <p className="sm:text-base font-medium">{item.name}</p>
              <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                <p className="text-lg">
                  {currency}
                  {item.price}
                </p>
                <p>Quantity: 1</p>
                <p>Size: M</p>
              </div>
              <p className="mt-2">
                Date: <span className="text-gray-400">25, Jul, 2025</span>
              </p>
            </div>
            <div className="md:w-1/2 flex justify-between ">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="bg-white hover:shadow-none text-black text-xs my-5 px-8 py-3 active:bg-slate-100 rounded-sm shadow-inner shadow-gray-200 uppercase transition-all duration-100">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
