import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cambiarFondo } from '../../../redux/Fondo/FondoSlice'
import { ocultarSeccion } from '../../../redux/Seccion/seccionSlice'
import Atropos from 'atropos/react'
import './Seccion.styles.scss'

const Seccion = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (titulo) => {
    dispatch(cambiarFondo())
    dispatch(ocultarSeccion())
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
