import { toast } from 'react-toastify'
export default function reducer(state, action) {
  console.log('Reducer called', action)
  switch (action.type) {
    case 'ADD_TO_CART':
      let updatedCart = { ...state.cart }
      if (updatedCart[action.payload.id]) {
        updatedCart[action.payload.id][action.payload.size]
          ? (updatedCart[action.payload.id][action.payload.size] += 1)
          : (updatedCart[action.payload.id][action.payload.size] = 1)
        updatedCart[action.payload.id].total += action.payload.price
      } else {
        updatedCart[action.payload.id] = {
          [action.payload.size]: 1,
          total: action.payload.price,
        }
      }
      return {
        ...state,
        cart: updatedCart,
        cartProductsCount: state.cartProductsCount + 1,
      }

    default:
      return state
  }
}
