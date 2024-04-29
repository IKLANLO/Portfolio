// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, cambiarFondo } from '../../../redux/Fondo/FondoSlice'
// import HomeButton from '../HomeButton/HomeButton'
import Atropos from 'atropos/react'
import './Seccion.styles.scss'

const Seccion = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // let { seccionSelected, fondoWidth, fondoHeight } = useSelector(
  //   (state) => state.fondo
  // )

  const handleClick = (titulo) => {
    dispatch(cambiarFondo())
    switch (titulo) {
      case 'Sobre mí':
        navigate('/sobremi')
        break

      case 'Skills':
        navigate('/skills')
        break

      case 'Proyectos':
        navigate('/proyectos')
        break

      case 'Otros':
        navigate('/otros')
        break

      default:
        break
    }
  }

  return (
    <Atropos
      shadow={false}
      className={`${props.longitud}`}
      onClick={() => handleClick(props.titulo)}>
      <div className="seccion">
        <h1>{props.titulo}</h1>
      </div>
    </Atropos>
  )
}

export default Seccion
