import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reset as resetFondo } from '../../../redux/Fondo/FondoSlice'
import { reset as resetSeccion } from '../../../redux/Seccion/seccionSlice'
import Atropos from 'atropos/react'
import './HomeButton.styles.scss'

const HomeButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(resetFondo())
    dispatch(resetSeccion())
    navigate('/')
  }

  return (
    <Atropos shadow={false}>
      <div className="home-button" onClick={() => handleClick()}>
        <button className="home-button__button">Atrás</button>
      </div>
    </Atropos>
  )
}

export default HomeButton
