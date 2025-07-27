import React, { useContext } from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../contexts/ShopContext'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title t1={'contact'} t2={'us'} />
      </div>
      <div className="flex flex-col my-10 justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center ite gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">Address: 123 Street, New York, USA</p>
          <p className="text-gray-500">
            Phone: +1 234 567 890 <br /> Email: contact@forever.com
          </p>
          <p className="text-gray-500 font-semibold text-xl">Careers</p>
          <p className="text-gray-500">expolre our team and positions</p>
          <button className="bg-black hover:opacity-85 text-white text-xs px-8 py-3 active:bg-gray-700 rounded-sm shadow-lg shadow-gray-500 transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
