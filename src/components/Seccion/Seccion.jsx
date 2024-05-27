import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  cambiarFondo,
  reset as resetFondo,
} from '../../../redux/Fondo/FondoSlice'
import {
  ocultarSeccion,
  reset as resetSeccion,
} from '../../../redux/Seccion/seccionSlice'
import Atropos from 'atropos/react'
import usuarioIcon from '../../../assets/usuario.png'
import emailIcon from '../../../assets/email.png'
import skillsIcon from '../../../assets/skills.png'
import proyectosIcon from '../../../assets/proyectos.png'
import './Seccion.styles.scss'

const Seccion = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const currentLocation = window.location.pathname
    const handlePopState = () => {
      if (currentLocation !== '/' || currentLocation !== '/Portfolio') {
        dispatch(resetFondo())
        dispatch(resetSeccion())
        navigate('/')
      } else {
        window.history.pushState(null, '', '/Portfolio')
      }
    }

    window.addEventListener('popstate', () => handlePopState())

    return () => {
      window.addEventListener('popstate', () => handlePopState())
    }
  }, [])

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

      case 'Contacto':
        navigate('/contacto')
        break

      default:
        break
    }
  }

  const handleIcon = (titulo) => {
    switch (titulo) {
      case 'Sobre mí':
        return usuarioIcon

      case 'Skills':
        return skillsIcon

      case 'Proyectos':
        return proyectosIcon

      case 'Contacto':
        return emailIcon

      default:
        break
    }
  }

  return (
    <Atropos
      shadow={false}
      style={{ minWidth: '7.875rem' }}
      className={`${props.longitud}`}
      onClick={() => handleClick(props.titulo)}>
      <div className="seccion">
        {isMobile ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              objectFit: 'fill',
              maxHeight: '95%',
            }}>
            <img src={handleIcon(props.titulo)} alt="icono" />
            <span style={{ fontSize: '0.9375rem' }}>{props.titulo}</span>
          </div>
        ) : (
          <h1>{props.titulo}</h1>
        )}
      </div>
    </Atropos>
  )
}

export default Seccion
