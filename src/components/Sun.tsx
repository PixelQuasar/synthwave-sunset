import { Circle } from '@react-three/drei'

interface ISunProps {
    sunColor: string
}

export default function Sun({sunColor}: ISunProps) {
    return (
        <mesh position={[0, 0, -4.2]}>
            <Circle args={[3, 32, 0, Math.PI]}>
                <meshBasicMaterial color={sunColor} opacity={1} />
            </Circle>

            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[6, 0.1, 0.1]} />
                <meshBasicMaterial color="#000000" fog={false} />
            </mesh>
            <mesh position={[0, 0.15, 0]}>
                <boxGeometry args={[6, 0.1, 0.1]} />
                <meshBasicMaterial color="#000000" fog={false} />
            </mesh>
            <mesh position={[0, 0.40, 0]}>
                <boxGeometry args={[5.95, 0.09, 0.1]} />
                <meshBasicMaterial color="#000000" fog={false} />
            </mesh>
            <mesh position={[0, 0.75, 0]}>
                <boxGeometry args={[5.83, 0.075, 0.1]} />
                <meshBasicMaterial color="#000000" fog={false} />
            </mesh>
            <mesh position={[0, 1.3, 0]}>
                <boxGeometry args={[5.4, 0.05, 0.1]} />
                <meshBasicMaterial color="#000000" fog={false} />
            </mesh>
            <mesh position={[0, 2, 0]}>
                <boxGeometry args={[4.5, 0.03, 0.1]} />
                <meshBasicMaterial color="#000000" fog={false} />
            </mesh>
        </mesh>
    )
}
