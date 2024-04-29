import { createSlice } from '@reduxjs/toolkit'

const anchoPantalla = window.innerWidth
console.log('ancho', anchoPantalla)

const getInitialWidth = () => {
  return anchoPantalla > 600 ? '50%' : '30%'
}

const initialState = {
  seccionSelected: false,
  seccionWidth: getInitialWidth(),
  seccionHeight: '6.25rem',
}

export const seccionSlice = createSlice({
  name: 'seccion',
  initialState,
  reducers: {
    reset: (state) => {
      state.seccionSelected = false
      state.seccionWidth = getInitialWidth()
      state.seccionHeight = '6.25rem'
    },
    ocultarSeccion: (state) => {
      state.seccionSelected = true
      state.seccionWidth = 0
      state.seccionHeight = 0
    },
  },
})

export const { reset, ocultarSeccion } = seccionSlice.actions

export default seccionSlice.reducer
