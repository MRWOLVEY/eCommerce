import React from 'react'
import { useContext, useEffect, useState, useMemo } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import { data } from 'autoprefixer'
import { use } from 'react'
import CartTotal from '../components/CartTotal'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { state, dispatch, actions, products, currency, delivery_fee } = useContext(ShopContext)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const getTotal = (cart) => {
    let t = 0
    for (let item in cart) {
      t += cart[item].data.price * cart[item].quantity
    }
    dispatch({ type: actions.updateTotal, payload: { total: t } })
  }

  const cartData = useMemo(() => {
    const result = []
    Object.keys(state.cart).forEach((key) => {
      Object.keys(state.cart[key]).forEach((size) => {
        if (size !== 'total') {
          const product = products.find((p) => p._id === key)
          if (product) {
            result.push({
              id: key,
              size,
              quantity: state.cart[key][size],
              data: product,
            })
          }
        }
      })
    })
    return result
  }, [state.cart, products])

  useEffect(() => {
    getTotal(cartData)
  }, [cartData])

  return (
    <div className="pt-14">
      <div className="text-2xl mb-3">
        <Title t1={'your'} t2={'cart'} />
        {state.cartProductsCount == 0 ? <p className="text-gray-500">Your cart is empty</p> : null}
        {cartData.map((item, index) => {
          console.log('item', item)
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={item.data.image[0]} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium ">{item.data.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                    <p>
                      {currency}
                      {item.data.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === '0' || e.target.value === ''
                    ? ((e.target.value = '1'), dispatch({ type: actions.updateQuantity, payload: { id: item.id, size: item.size, quantity: 1 } }))
                    : dispatch({ type: actions.updateQuantity, payload: { id: item.id, size: item.size, quantity: e.target.value } })
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 "
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => dispatch({ type: actions.removeFromCart, payload: { id: item.id, size: item.size } })}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-black hover:opacity-85 text-white text-xs my-5 px-8 py-3 active:bg-gray-700 rounded-sm shadow-lg shadow-gray-200 uppercase transition-all duration-100"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
