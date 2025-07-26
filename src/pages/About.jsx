import React, { useContext } from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../contexts/ShopContext'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title t1={'about'} t2={'us'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laborum aperiam molestias quidem ut libero eveniet, similique earum
            voluptas quasi sunt quos assumenda doloremque quibusdam aliquid quia blanditiis doloribus ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem deleniti expedita sequi, error accusantium explicabo mollitia hic
            voluptas fugit, harum officia, repellat fuga repudiandae placeat ullam adipisci atque provident delectus.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim eveniet iste saepe minima provident a eos sint molestias quae, ex
            mollitia esse non obcaecati ducimus deleniti laboriosam? Tempore, ea.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title t1={'why'} t2={'choose us'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Service</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
