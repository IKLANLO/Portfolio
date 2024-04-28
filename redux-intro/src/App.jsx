import Fondo from './components/Fondo/Fondo'
import Seccion from './components/Seccion/Seccion'
import './App.scss'

function App() {
  return (
    <>
      <Fondo />
      <div
        style={{
          marginTop: '4%',
        }}>
        <Seccion titulo={'Sobre mí'} longitud={'my-atropos1'} />
        <Seccion titulo={'Skills'} longitud={'my-atropos2'} />
        <Seccion titulo={'Proyectos'} longitud={'my-atropos3'} />
        <Seccion titulo={'Otros'} longitud={'my-atropos4'} />
      </div>
    </>
  )
}

export default App
