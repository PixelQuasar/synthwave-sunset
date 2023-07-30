import { useFrame } from '@react-three/fiber';
import { Bounds, Circle, OrbitControls, Point, PointMaterial, Points } from '@react-three/drei';
import { EffectComposer, Outline, Selection, Select, SSAO, SMAA, Glitch } from '@react-three/postprocessing';
import { Vector3 } from 'three';
import { useRef, useLayoutEffect, useState } from 'react';
import * as THREE from 'three'
import Stars from './Stars';
import { random } from 'maath';

interface ISceneProps {
    sunColor: string
}

const SunsetScene = ({ sunColor }: ISceneProps) => {
    return (
        <group>

            <mesh rotation={[0.2, 0, 0]} position={[0, 0, -2]}>
                <mesh>
                    {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} /> */}
                    <mesh position={[0, 1, 100]}>
                        <directionalLight color="hotpink" position={[0, 0, -10]} />
                        <boxGeometry args={[10, 10, 10]} />
                        <meshStandardMaterial color="hotpink" />

                    </mesh>


                    <Selection>
                        <EffectComposer multisampling={0} autoClear={false}>
                            {/* <SSAO radius={0.05} intensity={150} luminanceInfluence={0.5} color="black" /> */}
                            <Outline blur visibleEdgeColor="#b424ed" edgeStrength={100} width={1000} />
                            <SMAA />
                        </EffectComposer>

                        {/* {(Array.apply(null, Array(60))).map((el: any, Xpos: number) => {
                            return (Array.apply(null, Array(30))).map((el: any, Ypos: number) => {
                                //if ((Xpos + Ypos) % 2 == 0) return null
                                return <Tile key={Ypos + Xpos} position={[Xpos * 1, 0, Ypos * 1 - 10]} />

                            })
                        })} */}
                        <Line isMove={false} start={[-20, 0, -4]} end={[20, 0, -4]} />

                        <mesh position={[0, 0, -4]}>
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

                        {/* <mesh position={[0, -1, -10]}>
                            <boxGeometry args={[100, 0.01, 100]}/>
                            <meshBasicMaterial color="#000000" />
                        </mesh> */}

                        {(Array.apply(null, Array(10))).map((el: any, Xshift: number) => {
                            return <Line isMove={true} key={Xshift} start={[-20, 0, Xshift - 3]} end={[20, 0, Xshift - 3]} />
                        })}
                        {(Array.apply(null, Array(30))).map((el: any, Yshift: number) => {
                            return <Line isMove={false} key={Yshift} start={[Yshift - 15, 0, -3.6]} end={[Yshift - 15, 0, 10]} />
                        })}

                        {Array.apply(null, Array(400)).map((el: any, index: number) => {
                            return <Star Yrange={[10, 15]}/>
                        })}
                        {Array.apply(null, Array(50)).map((el: any, index: number) => {
                            return <Star Yrange={[0, 10]}/>
                        })}


                    </Selection>


                </mesh>
            </mesh>
        </group>
    );
};

interface ITileProps {
    position: Vector3 | undefined
}

const Tile = ({ position }: ITileProps) => {
    // const startVector = type == "hor" ? [0, 0, 0] : [0, 0, 0]
    // const endVector = type == "hor" ? [0, 0, 0] : [0, 0, 0]
    return (
        <Select enabled={true}>
            <mesh position={position}>
                {/* <Line start={startVector} end={endVector}/> */}
                <boxGeometry args={[0.1, 0.001, 0.95]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </Select>
    )
}

const randomRange = (a: number, b: number) => {
    return Math.random() * (b - a) + a
}

interface IStarProps {
    Yrange: number[]
}

const Star = ({ Yrange }: IStarProps) => {
    const ref = useRef<THREE.Mesh>(null!)

    const starPosition: Vector3 | undefined = new Vector3(randomRange(-30, 30), randomRange(Yrange[0], Yrange[1]), randomRange(-15,-10))
    return (
        <mesh ref={ref} position={starPosition}>
            <boxGeometry args={[0.03, 0.03, 0.03]}/>
            <meshBasicMaterial color="#ffffff" fog={false} />
        </mesh>
    )
}

interface ILineProps {
    start: number[]
    end: number[]
    isMove: boolean
}

function Line({ start, end, isMove }: ILineProps) {
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
            <lineBasicMaterial color="hotpink" />
        </line>
    )
}

export default SunsetScene;