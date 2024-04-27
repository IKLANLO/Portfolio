import Fondo from './components/Fondo/Fondo'
import Seccion from './components/Seccion/Seccion'
import './App.scss'

function App() {
  return (
    <>
      <Fondo />
      <div
        style={{
          marginTop: '7.5%',
        }}>
        <Seccion titulo={'Sobre mí'} longitud={'div1'} />
        <Seccion titulo={'Skills'} longitud={'div2'} />
        <Seccion titulo={'Proyectos'} longitud={'div3'} />
        <Seccion titulo={'Otros'} longitud={'div4'} />
      </div>
    </>
  )
}

export default App
