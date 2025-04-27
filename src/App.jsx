import { useContext, useEffect, useReducer, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Orders from './pages/Orders'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import './App.css'
import ShopContextProvider from './contexts/ShopContext'
import SearchBar from './components/SearchBar'

import reducer from './contexts/Reducer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const initialState = {
    cartProductsCount: 0,
    cart: {},
  }
  const actions = {
    addToCart: 'ADD_TO_CART',
    removeFromCart: 'REMOVE_FROM_CART',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    toast.error('testing :)')
  }, [])

  return (
    <ShopContextProvider state={state} dispatch={dispatch} actions={actions}>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </ShopContextProvider>
  )
}

export default App
