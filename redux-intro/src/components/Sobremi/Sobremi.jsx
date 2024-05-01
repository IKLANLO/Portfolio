import HomeButton from '../HomeButton/HomeButton'
import '../../components/Contenidos.styles.scss'
import './Sobremi.styles.scss'
import profilePic from '../../../assets/profile.jpg'

const Sobremi = () => {
  return (
    <>
      <div className="container">
        <div className="container__button">
          <HomeButton />
        </div>
        <h1>Sobre mí</h1>
      </div>
      <div className="divider-container">
        <div className="divider-container__img">
          <img src={profilePic} alt="profilePic" title="profile picture" />
        </div>
        <div className="text-container">
          <p className="text-container__p">
            ¡Hola! Soy Iker, un apasionado del mundo del desarrollo. Desde que
            descubrí la programación hace ya unos años, me fascinó el poder
            crear un producto desde cero que pueda ayudar a otros a solucionar
            problemas específicos.
          </p>
          <p className="text-container__p">
            Actualmente estoy centrado en el desarrollo web full stack, pudiendo
            desenvolverme tanto en el backend como en el frontend. El stack que
            uso generalmente es MongoDB o mySQL + Node.js + Express para la
            parte del backend, y React + Redux para la parte del frontend,
            aunque sigo ampliando mis conocimientos con diferentes recursos.
          </p>
          <p className="text-container__p">
            Cuando no estoy programando puedes encontrarme haciendo deporte,
            disfrutando de un paseo o viajando para conocer nuevos lugares.
          </p>
          <p className="text-container__p">
            ¡Gracias por pasarte por mi página web!
          </p>
        </div>
      </div>
    </>
  )
}

export default Sobremi
