import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reset as resetFondo } from '../../../redux/Fondo/FondoSlice'
import { reset as resetSeccion } from '../../../redux/Seccion/seccionSlice'

const HomeButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(resetFondo())
    dispatch(resetSeccion())
    navigate('/')
  }

  return <button onClick={() => handleClick()}>Atrás</button>
}

export default HomeButton
