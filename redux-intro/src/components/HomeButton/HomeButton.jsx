import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reset } from '../../../redux/Fondo/FondoSlice'

const HomeButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate('/')
    dispatch(reset())
  }

  return <button onClick={() => handleClick()}>Atrás</button>
}

export default HomeButton
