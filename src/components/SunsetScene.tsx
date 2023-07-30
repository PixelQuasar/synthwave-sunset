import { useFrame } from '@react-three/fiber';
import { Bounds, Circle, OrbitControls, Point, PointMaterial, Points } from '@react-three/drei';
import { EffectComposer, Outline, Selection, Select, SSAO, SMAA, Glitch } from '@react-three/postprocessing';
import { Vector3 } from 'three';
import { useRef, useLayoutEffect, useState } from 'react';
import * as THREE from 'three'
import Line from './Line';
import Star from './Star';
import Sun from './Sun';

interface ISunsetSceneProps {
    linesColor: string,
    sunColor: string,
    starsColor: string
}


const SunsetScene = ({ sunColor, linesColor, starsColor }: ISunsetSceneProps) => {
    return (
        <group>

            <mesh rotation={[0.2, 0, 0]} position={[0, 0, -2]}>
                <mesh>
                    {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} /> */}
                    <Selection>
                        <EffectComposer multisampling={0} autoClear={false}>
                            {/* <SSAO radius={0.05} intensity={150} luminanceInfluence={0.5} color="black" /> */}
                            <Outline blur visibleEdgeColor="#b424ed" edgeStrength={100} width={1000} />
                            <SMAA />
                        </EffectComposer>

                        <Line isMove={false} start={[-20, 0, -4]} end={[20, 0, -4]} color={linesColor}/>

                        <Sun sunColor={sunColor}/>

                        {(Array.apply(null, Array(10))).map((el: any, Xshift: number) => {
                            return <Line isMove={true} key={Xshift} start={[-20, 0, Xshift - 3]} end={[20, 0, Xshift - 3]} color={linesColor}/>
                        })}
                        {(Array.apply(null, Array(30))).map((el: any, Yshift: number) => {
                            return <Line isMove={false} key={Yshift} start={[Yshift - 15, 0, -4]} end={[Yshift - 15, 0, 10]} color={linesColor}/>
                        })}

                        {Array.apply(null, Array(400)).map(() => {
                            return <Star Yrange={[10, 15]} color={starsColor}/>
                        })}
                        {Array.apply(null, Array(50)).map(() => {
                            return <Star Yrange={[0, 10]} color={starsColor}/>
                        })}
                    </Selection>


                </mesh>
            </mesh>
        </group>
    );
};


export default SunsetScene;