import { Canvas } from '@react-three/fiber'
import SunsetScene from './components/SunsetScene'

function App() {
  const fogColor = "#00fff2"
  const linesColor = "#ff00dd"
  const starsColor = "#ff96e1"
  const sunColor = "#ffffff"

  return (
    <div id="canvas-container">
      <Canvas dpr={[1, 1]}>
        <fog attach="fog" args={[fogColor, 1, 10]} />
        <SunsetScene linesColor={linesColor} starsColor={starsColor} sunColor={sunColor}/>
      </Canvas>
    </div>
  )
}

export default App
