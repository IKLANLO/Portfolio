import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import Footer from './Footer'
import HomeButton from '../HomeButton/HomeButton'
import '../../components/Contenidos.styles.scss'
import './base.scss'
import './sandbox.scss'
import './embla.scss'

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Proyectos = () => {
  return (
    <div className="container">
      <h1>Mis proyectos</h1>
      <div className="container__button">
        <HomeButton />
      </div>
      <div className="carousel">
        <EmblaCarousel options={OPTIONS} />
        <Footer />
      </div>
    </div>
  )
}

export default Proyectos
