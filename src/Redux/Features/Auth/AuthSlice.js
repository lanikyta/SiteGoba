import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  // jwt: null,
  user: null,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      return payload
    },
    logout: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { login, register, logout } = authSlice.actions

export default authSlice.reducer
