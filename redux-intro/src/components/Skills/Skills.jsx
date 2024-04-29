import HomeButton from '../HomeButton/HomeButton'
import '../../components/Contenidos.styles.scss'
import './Skills.styles.scss'
import reactIcon from '../../../assets/react.svg'
import jsIcon from '../../../assets/javascript.svg'

const Skills = () => {
  return (
    <div className="container">
      <div className="container__button">
        <HomeButton />
      </div>
      <h1>Mis habilidades</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="container-icons">
          <div className="icons">
            <img src={reactIcon} alt="reactIcon" title="React" />
            <label>React</label>
          </div>
          <div className="icons">
            <img src={jsIcon} alt="jsIcon" />
            <label>JavaScript</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
