import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const location = useLocation()

  return showSearch && location.pathname.includes('/collection') ? (
    <div className="border-t-2 border-b-2 bg-gray-100 text-center h-20 flex justify-center items-center">
      <div className="inline-flex justify-between items-center h-10 border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-auto outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <img src={assets.search_icon} className="inline w-5 cursor-pointer" alt="" /> */}
      </div>
      <img src={assets.cross_icon} className="inline w-3 cursor-pointer" onClick={() => setShowSearch(false)} alt="" />
    </div>
  ) : null
}

export default SearchBar
