import { createSlice } from '@reduxjs/toolkit'
const initialState = []
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.some((prod) => prod.item.id === payload.item.id)
        ? state.map((elem) => {
            if (elem.item.id === payload.item.id) {
              return (elem.quantity += payload.quantity)
            }
            return elem
          })
        : state.push(payload)
    },
    removeOne: (state, { payload }) => {
      return state.filter((prod) => prod.item.id !== payload.item.id)
    },
    clearCart: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, removeOne } = cartSlice.actions

export default cartSlice.reducer
