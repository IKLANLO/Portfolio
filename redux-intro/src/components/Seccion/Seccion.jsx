// import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { reset, cambiarFondo } from '../../../redux/Fondo/FondoSlice'

import Atropos from 'atropos/react'
import './Seccion.styles.scss'

const Seccion = (props) => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  let { seccionSelected, fondoWidth, fondoHeight } = useSelector(
    (state) => state.fondo
  )

  const handleFondo = () => {
    dispatch(cambiarFondo())
  }

  return (
    <Atropos
      shadow={false}
      className={`${props.longitud}`}
      onClick={() => handleFondo()}>
      <div className="seccion">
        <h1>{props.titulo}</h1>
      </div>
    </Atropos>
  )
}

export default Seccion
