import { createContext, useReducer, useState } from 'react'
import { products } from '../assets/frontend_assets/assets'
import reducer from './Reducer'

export const ShopContext = createContext()

const ShopContextProvider = ({ value, children }) => {
  const currency = '$'
  const delivery_fee = 10
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const initialState = {
    cartProductsCount: 69,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const values = {
    products,
    currency,
    delivery_fee,
    state,
    dispatch,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  }

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>
}

export default ShopContextProvider
