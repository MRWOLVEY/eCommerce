const calculateCount = (cart) => {
  let quantity = 0
  for (const key in cart) {
    for (const size in cart[key]) {
      quantity += cart[key][size]
    }
  }
  return quantity
}

export default function reducer(state, action) {
  let updatedCart = {}
  switch (action.type) {
    case 'ADD_TO_CART':
      updatedCart = { ...state.cart }
      if (updatedCart[action.payload.id]) {
        updatedCart[action.payload.id][action.payload.size]
          ? (updatedCart[action.payload.id][action.payload.size] += 1)
          : (updatedCart[action.payload.id][action.payload.size] = 1)
      } else {
        updatedCart[action.payload.id] = {
          [action.payload.size]: 1,
        }
      }
      return {
        ...state,
        cart: updatedCart,
        cartProductsCount: calculateCount(updatedCart),
      }
    case 'UPDATE_QUANTITY':
      updatedCart = { ...state.cart }
      updatedCart[action.payload.id][action.payload.size] = parseInt(action.payload.quantity)
      return {
        ...state,
        cart: updatedCart,
        cartProductsCount: calculateCount(updatedCart),
      }
    case 'REMOVE_FROM_CART':
      updatedCart = { ...state.cart }
      delete updatedCart[action.payload.id][action.payload.size]
      if (Object.keys(updatedCart[action.payload.id]).length === 0) {
        delete updatedCart[action.payload.id]
      }
      return {
        ...state,
        cart: updatedCart,
        cartProductsCount: calculateCount(updatedCart),
      }

    case 'UPDATE_TOTAL':
      return {
        ...state,
        total: action.payload.total,
      }
    default:
      return state
  }
}
