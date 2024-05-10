import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  proyecto: 'https://github.com/IKLANLO/desafioFS_frontend.git',
}

export const proyectoSlice = createSlice({
  name: 'proyecto',
  initialState,
  reducers: {
    setProyecto: (state, action) => {
      state.proyecto = action.payload
    },
  },
})

export const { setProyecto } = proyectoSlice.actions

export default proyectoSlice.reducer
