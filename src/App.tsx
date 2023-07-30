import './App.css'
import { Canvas } from '@react-three/fiber'
import Main from './assets/three/Main'

function App() {
  return (
    <div id="canvas-container">
      <Canvas dpr={[1, 1]}>
      <fog attach="fog" args={['#00fff2', 1, 10]} />
        <Main/>
        {/* <mesh rotation={[0.5, 0.3, 1]}>
          <ambientLight intensity={0.5} />
          <directionalLight color="red" position={[0, 0, 5]}/>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
          
        </mesh> */}
      </Canvas>
    </div>
  )
}

export default App
