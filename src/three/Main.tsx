import React, { useRef, useState } from 'react'
import Stars from './Stars'
import SunsetScene from './SunsetScene'
import { useFrame } from 'react-three-fiber'
import { Mesh, Vector3 } from 'three'
import { useSpring } from '@react-spring/three'

export default function Main() {
    const ref = useRef<Mesh>(null!)
    const anim = useRef<boolean>(false)

    const velocity = useRef<number>(0.5)
    useFrame((state: any, delta: number) => {
        if (anim.current) {
            ref.current.position.y -= delta * velocity.current * 0.16
            ref.current.position.z += delta * velocity.current

            velocity.current *= 1.04

            if (ref.current.position.z > 10.6) {
                velocity.current = 0
                ref.current.position.z = 10.6
            }
        }
    })

    const startAnim = () => {
        anim.current = true
    }

    return (
        <group>
           
        
            <mesh ref={ref} onClick={startAnim}>
                {/* <Stars /> */}
                <SunsetScene sunColor="#ffffff" />
            </mesh>
        </group>
    )
}
