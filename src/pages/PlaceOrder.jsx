import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import './PlaceOrder.css'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../contexts/ShopContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const [method, setMethod] = useState('stripe')
  const navigate = useNavigate()
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5vsm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title t1={'delivery'} t2={'information'} />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="text" name="" placeholder="First Name" id="" />
          <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="text" name="" placeholder="Last Name" id="" />
        </div>
        <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="email" name="" placeholder="Email address" id="" />
        <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="text" name="" placeholder="Street" id="" />
        <div className="flex gap-3">
          <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="text" name="" placeholder="City" id="" />
          <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="text" name="" placeholder="State" id="" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="number" name="" placeholder="Zipcode" id="" />
          <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="text" name="" placeholder="Country" id="" />
        </div>
        <input className="border border-gray-300 px-3.5 py-1.5 w-full rounded" type="number" name="" placeholder="Phone" id="" />
      </div>
      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title t1={'payment'} t2={'method'} />
        </div>
        {/* paymnet methods selection */}
        <div className="flex gap-3 flex-col lg:flex-row">
          <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500 border-gray-400' : ''}`}></p>
            <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
          </div>
          <div onClick={() => setMethod('vadafone')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'vadafone' ? 'bg-green-500 border-gray-400' : ''}`}></p>
            <img className="h-5 mx-4" src={assets.vadafone_logo} alt="" />
          </div>
          <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500 border-gray-400' : ''}`}></p>
            <p className="uppercase text-gray-500 text-sm font-medium mx-4">cash on delivery</p>
          </div>
        </div>
        <div className="w-full text-end mt-8">
          <button
            onClick={() => navigate('/orders')}
            className="bg-black hover:opacity-85 text-white text-xs my-5 px-8 py-3 active:bg-gray-700 rounded-sm shadow-lg shadow-gray-200 uppercase transition-all duration-100"
          >
            place order
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
