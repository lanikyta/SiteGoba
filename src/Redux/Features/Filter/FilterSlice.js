import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      return payload
    },
    clearFilter: (state, action) => initialState,
  },
})

export const { setFilter, clearFilter } = filterSlice.actions

export default filterSlice.reducer
