import { configureStore } from '@reduxjs/toolkit'
import fondo from '../redux/Fondo/FondoSlice'

export const store = configureStore({
  reducer: { fondo },
})
