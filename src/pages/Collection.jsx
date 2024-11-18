import React, { useContext, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import classNames from 'classnames'
import { assets } from '../../public/assets/frontend_assets/assets'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* filter options */}
      <div className="min-w-60 h-fit transition duration-100 ease-in-out">
        <p className="my-2 text-xl flex items-center gap-2 cursor-pointer">
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={classNames('h-3 sm:hidden transition duration-100 ease-in-out cursor-pointer', {
              'rotate-90': showFilter,
            })}
            onClick={() => setShowFilter(!showFilter)}
          />
        </p>
        {/* category filter */}
        <div
          className={classNames('transition duration-300 ease-in-out h-100 overflow-hidden opacity-100', {
            'max-[400px]:h-0 max-[400px]:opacity-0': !showFilter,
          })}
        >
          <div
            className={classNames('border border-gray-300 pl-5 py-3 mt-6', {
              '': !showFilter,
            })}
          >
            <p className="mb-3 text-sm font-medium">Categories</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" value={'Men'} className="w-3" /> Men
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Women'} className="w-3" /> Women
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Kids'} className="w-3" /> Kids
              </p>
            </div>
          </div>
          {/* subcategory filter */}
          <div
            className={classNames('border border-gray-300 pl-5 py-3 my-5', {
              '': !showFilter,
            })}
          >
            <p className="mb-3 text-sm font-medium">Type</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" value={'Topwear'} className="w-3" />
                Topwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Bottomwear'} className="w-3" />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Winterwear'} className="w-3" />
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
