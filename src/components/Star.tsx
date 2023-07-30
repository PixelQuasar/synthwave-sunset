import { useRef } from "react"
import { Vector3 } from "three"

interface IStarProps {
    Yrange: number[]
    color: string
}

export default function Star ({ Yrange, color }: IStarProps) {
    const ref = useRef<THREE.Mesh>(null!)

    const randomRange = (a: number, b: number) => {
        return Math.random() * (b - a) + a
    }

    const starPosition: Vector3 | undefined = new Vector3(randomRange(-30, 30), randomRange(Yrange[0], Yrange[1]), randomRange(-15,-10))
    return (
        <mesh ref={ref} position={starPosition}>
            <boxGeometry args={[0.03, 0.03, 0.03]}/>
            <meshBasicMaterial color={color} fog={false} />
        </mesh>
    )
}
