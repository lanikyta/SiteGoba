import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../Features/Auth/AuthSlice'
import CartReducer from '../Features/Cart/CartSlice'
import filterReducer from '../Features/Filter/FilterSlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: CartReducer,
    filter: filterReducer,
  },
})
