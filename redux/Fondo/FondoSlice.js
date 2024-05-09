import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  seccionSelected: false,
  fondoWidth: '400%',
  fondoHeight: '100%',
}

export const fondoSlice = createSlice({
  name: 'fondo',
  initialState,
  reducers: {
    reset: (state) => {
      state.seccionSelected = false
      state.fondoWidth = '400%'
      state.fondoHeight = '100%'
    },
    cambiarFondo: (state) => {
      state.seccionSelected = true
      state.fondoWidth = '200%'
      state.fondoHeight = '20%'
    },
  },
})

export const { reset, cambiarFondo } = fondoSlice.actions

export default fondoSlice.reducer
