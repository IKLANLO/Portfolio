import { configureStore } from '@reduxjs/toolkit'
import fondo from '../redux/Fondo/FondoSlice'
import seccion from '../redux/Seccion/seccionSlice'

export const store = configureStore({
  reducer: { fondo, seccion },
})
