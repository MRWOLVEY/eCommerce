import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title'

function CartTotal() {
  const { state, delivery_fee, currency } = useContext(ShopContext)
  return (
    <div>
      <div className="w-full">
        <div className="text-2xl">
          <Title t1={'cart'} t2={'total'} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>
              {currency} {state.total}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>
              {currency} {delivery_fee}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <b>Total</b>
            <b>
              {currency} {state.total == 0 ? 0 : state.total + delivery_fee}.00
            </b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
