import { Canvas } from '@react-three/fiber'
import Main from './components/Main'
import SunsetScene from './components/SunsetScene'

function App() {
  const fogColor = "#00fff2"
  const linesColor = ""
  const starsColor = ""
  const sunColor = ""

  return (
    <div id="canvas-container">
      <Canvas dpr={[1, 1]}>
        <fog attach="fog" args={[fogColor, 1, 10]} />
        <SunsetScene linesColor='#ff00dd' starsColor='#ff96e1' sunColor='#ffffff'/>
      </Canvas>
    </div>
  )
}

export default App
