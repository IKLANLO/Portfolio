import './Seccion.styles.scss'

const Seccion = (props) => {
  return (
    <div className={`seccion ${props.longitud}`}>
      <h1>{props.titulo}</h1>
    </div>
  )
}

export default Seccion
