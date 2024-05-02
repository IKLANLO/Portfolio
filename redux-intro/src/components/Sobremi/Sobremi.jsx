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
            ¡Hola! Soy <b>Iker</b>, un <b>apasionado</b> del mundo del
            desarrollo. Desde que descubrí la programación hace ya unos años, me
            fascinó el poder crear un producto desde cero que pueda{' '}
            <b>ayudar</b> a otros a solucionar problemas específicos.
          </p>
          <p className="text-container__p">
            Actualmente estoy centrado en el <b>desarrollo web full stack</b>,
            pudiendo desenvolverme tanto en el <b>backend</b> como en el{' '}
            <b>frontend</b>. El stack que uso generalmente es <b>MongoDB</b> o{' '}
            <b>mySQL</b> + <b>Node.js</b> + <b>Express</b> para la parte del
            backend, y <b>React</b> + <b>Redux</b> para la parte del frontend,
            aunque sigo <b>ampliando</b> mis conocimientos con diferentes
            recursos.
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
