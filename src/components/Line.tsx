import { useLayoutEffect, useRef } from "react"
import { useFrame } from "react-three-fiber"
import * as THREE from 'three';

interface ILineProps {
    start: number[]
    end: number[]
    isMove: boolean
    color: string
}


export default function Line({ start, end, isMove, color }: ILineProps) {
    const ref = useRef<THREE.Mesh>(null!)
    useLayoutEffect(() => {
        ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)))
    }, [start, end])

    if (isMove) useFrame((state: any, delta: number) => {
        ref.current.position.z += delta * 1.5
        if (ref.current.position.z > 0) {
            ref.current.position.z = -1
        }
    })

    return (
        <line ref={ref}>
            <bufferGeometry />
            <lineBasicMaterial color={color} />
        </line>
    )
}
