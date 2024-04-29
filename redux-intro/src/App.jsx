import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Fondo from './components/Fondo/Fondo'
import Seccion from './components/Seccion/Seccion'
import Sobremi from './components/Sobremi/Sobremi'
import Skills from './components/Skills/Skills'
import Proyectos from './components/Proyectos/Proyectos'
import Otros from './components/Otros/Otros'
import './App.scss'

function App() {
  const { seccionSelected } = useSelector((state) => state.fondo)

  return (
    <>
      <Fondo />
      <div
        style={{
          marginTop: '4%',
        }}>
        <BrowserRouter>
          {!seccionSelected && (
            <>
              <Seccion titulo={'Sobre mí'} longitud={'my-atropos1'} />
              <Seccion titulo={'Skills'} longitud={'my-atropos2'} />
              <Seccion titulo={'Proyectos'} longitud={'my-atropos3'} />
              <Seccion titulo={'Otros'} longitud={'my-atropos4'} />
            </>
          )}
          <Routes>
            {/* <Route path="/" element={<HomeButton />} /> */}
            <Route path="/sobremi" element={<Sobremi />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/otros" element={<Otros />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
