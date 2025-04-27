import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import classNames from 'classnames'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubcategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCat = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
    }
  }
  const toggleSubCat = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item != e.target.value))
    } else {
      setSubcategory((prev) => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    showSearch && search ? (productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))) : null

    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) => category.includes(product.category))
    }
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((product) => subcategory.includes(product.subCategory))
    }
    setFilteredProducts(productsCopy)
  }

  const sortProducts = () => {
    let fpCopy = filteredProducts.slice()
    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price))
        break
      case 'high-low':
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subcategory, search])

  useEffect(() => {
    sortProducts()
  }, [sortType])

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
                <input type="checkbox" value={'Men'} className="w-3" onChange={toggleCat} /> Men
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Women'} className="w-3" onChange={toggleCat} /> Women
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Kids'} className="w-3" onChange={toggleCat} /> Kids
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
                <input type="checkbox" value={'Topwear'} className="w-3" onChange={toggleSubCat} />
                Topwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Bottomwear'} className="w-3" onChange={toggleSubCat} />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Winterwear'} className="w-3" onChange={toggleSubCat} />
                Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title t1="all" t2="collection" />
          {/* product sort */}
          <div className="flex items-center gap-2">
            <p className="hidden sm:block text-base">Sort by:</p>
            <select onChange={(e) => setSortType(e.target.value)} className="border border-gray-300 text-base rounded-sm" aria-placeholder="sort by">
              <option value="relevant">Relevant</option>
              <option value="low-high">Low to high</option>
              <option value="high-low">High to low</option>
            </select>
          </div>
        </div>
        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-2 md:col-span-3 lg:col-span-4 text-center text-gray-500 text-lg">No products found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection
