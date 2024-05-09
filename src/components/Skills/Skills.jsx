import React from 'react'
import HomeButton from '../HomeButton/HomeButton'
import '../../components/Contenidos.styles.scss'
import './Skills.styles.scss'
import reactIcon from '../../../assets/react.svg'
import jsIcon from '../../../assets/javascript.svg'
import HTMLIcon from '../../../assets/html5.svg'
import CSSIcon from '../../../assets/css3.svg'
import reduxIcon from '../../../assets/redux.svg'
import mySQLIcon from '../../../assets/mysql.svg'
import mongoDBIcon from '../../../assets/mongodb.png'
import sequelizeIcon from '../../../assets/sequelize.svg'
import mongooseIcon from '../../../assets/mongoose.svg'
import expressIcon from '../../../assets/expressjs.svg'
import nodeIcon from '../../../assets/nodejs.svg'
import sassIcon from '../../../assets/sass.svg'
import dockerIcon from '../../../assets/docker.svg'
import viteIcon from '../../../assets/vite.svg'
import cypressIcon from '../../../assets/cypress.svg'
import jestIcon from '../../../assets/jest.svg'
import gitIcon from '../../../assets/git.svg'
import githubIcon from '../../../assets/github.svg'
import bootstrapIcon from '../../../assets/bootstrap.svg'
import jasmineIcon from '../../../assets/jasmine.svg'
import postmanIcon from '../../../assets/postman.svg'
import npmIcon from '../../../assets/npm.svg'
import swaggerIcon from '../../../assets/swagger.svg'
import trelloIcon from '../../../assets/trello.svg'

const Skills = () => {
  return (
    <div className="container">
      <div className="container__button">
        <HomeButton />
      </div>
      <h1>Mis skills</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="container-icons">
          <div className="icons">
            <img className="icons__width" src={HTMLIcon} alt="HTMLIcon" />
            <label>HTML5</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={CSSIcon} alt="CSSIcon" />
            <label>CSS3</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={sassIcon} alt="sassIcon" />
            <label>Sass</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={jsIcon} alt="jsIcon" />
            <label>JavaScript</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={nodeIcon} alt="nodeIcon" />
            <label>Node.js</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={expressIcon} alt="expressIcon" />
            <label>Express</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={reactIcon} alt="reactIcon" />
            <label>React</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={reduxIcon} alt="reduxIcon" />
            <label>Redux</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={mySQLIcon} alt="mySQLIcon" />
            <label>mySQL</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={mongoDBIcon} alt="mongoDBIcon" />
            <label>MongoDB</label>
          </div>
          <div className="icons">
            <img
              className="icons__width"
              src={sequelizeIcon}
              alt="sequelizeIcon"
            />
            <label>Sequelize</label>
          </div>
          <div className="icons">
            <img
              className="icons__width"
              src={mongooseIcon}
              alt="mongooseIcon"
            />
            <label>Mongoose</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={dockerIcon} alt="dockerIcon" />
            <label>Docker</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={viteIcon} alt="viteIcon" />
            <label>Vite</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={cypressIcon} alt="cypressIcon" />
            <label>Cypress</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={jestIcon} alt="jestIcon" />
            <label>Jest</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={jasmineIcon} alt="jasmineIcon" />
            <label>Jasmine</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={gitIcon} alt="gitIcon" />
            <label>Git</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={githubIcon} alt="githubIcon" />
            <label>GitHub</label>
          </div>
          <div className="icons">
            <img
              className="icons__width"
              src={bootstrapIcon}
              alt="bootstrapIcon"
            />
            <label>Bootstrap</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={postmanIcon} alt="postmanIcon" />
            <label>Postman</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={npmIcon} alt="npmIcon" />
            <label>npm</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={swaggerIcon} alt="swaggerIcon" />
            <label>Swagger</label>
          </div>
          <div className="icons">
            <img className="icons__width" src={trelloIcon} alt="trelloIcon" />
            <label>Trello</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
