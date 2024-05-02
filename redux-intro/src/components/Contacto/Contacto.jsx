import HomeButton from '../HomeButton/HomeButton'
import { Link } from 'react-router-dom'
import '../../components/Contenidos.styles.scss'
import './Contacto.styles.scss'

const Contacto = () => {
  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div className="container">
      <div className="container__button">
        <HomeButton />
      </div>
      <h1>Contacto</h1>
      <div className="data-container">
        <div className="data-container__div">
          <label>Teléfono</label>
          <label>645724689</label>
        </div>
        <div className="data-container__div">
          <label>Email</label>
          <label
            className="data-container__div__email"
            onClick={() => handleEmail('ilandaberea@gmail.com')}>
            ilandaberea@gmail.com
          </label>
        </div>
        <div className="data-container__div">
          <label>LinkedIn</label>
          <Link
            className="data-container__div__link"
            to={'https://linkedin.com/in/iker-landaberea'}
            target="_blank">
            linkedin.com/in/iker-landaberea
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contacto
