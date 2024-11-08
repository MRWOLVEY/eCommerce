import { createContext, useReducer } from "react";
import { products } from "../../public/assets/frontend_assets/assets";
import reducer from "./Reducer";

export const ShopContext = createContext();

const ShopContextProvider = ({ value, children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const initialState = {
    cartProductsCount: 69,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    products,
    currency,
    delivery_fee,
    state,
    dispatch,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
