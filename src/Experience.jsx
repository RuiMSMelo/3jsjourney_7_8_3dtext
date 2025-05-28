import {
    Center,
    Text3D,
    OrbitControls,
    useMatcapTexture,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useState } from 'react'
import { temp } from 'three/tsl'
import * as THREE from 'three'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const torusMaterial = new THREE.MeshMatcapMaterial()

export default function Experience() {
    const [textMatcapTexture] = useMatcapTexture(
        '2D2D2F_C6C2C5_727176_94949B',
        256
    )
    const [torusMatcapTexture] = useMatcapTexture(
        '2A6276_041218_739BA6_042941',
        256
    )

    // const tempArray = [...Array(100)]
    // tempArray.map(() => {
    //     console.log('value')
    // })

    // const [torusGeometry, setTorusGeometry] = useState()
    // const [material, setMaterial] = useState()

    useEffect(() => {
        torusMatcapTexture.colorSpace = THREE.SRGBColorSpace

        torusMaterial.matcap = torusMatcapTexture
        torusMaterial.needsUpdate = true
    }, [])

    return (
        <>
            <Perf position='top-left' />

            <OrbitControls makeDefault />

            {/* <torusGeometry ref={setTorusGeometry} />
            <meshMatcapMaterial ref={setMaterial} matcap={torusMatcapTexture} /> */}

            <Center>
                <Text3D
                    font='./fonts/helvetiker_regular.typeface.json'
                    size={0.75}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    HELLO R3F
                    <meshMatcapMaterial matcap={textMatcapTexture} />
                </Text3D>
            </Center>

            {[...Array(50)].map((value, index) => (
                <mesh
                    key={index}
                    geometry={torusGeometry}
                    material={torusMaterial}
                    position={[
                        //random positions from -6 to -1 and 1 to 6
                        Math.random() < 0.5
                            ? -1 - Math.random() * 5
                            : 1 + Math.random() * 5,
                        Math.random() < 0.5
                            ? -1 - Math.random() * 5
                            : 1 + Math.random() * 5,
                        Math.random() < 0.5
                            ? -1 - Math.random() * 5
                            : 1 + Math.random() * 5,
                    ]}
                    scale={0.2 + Math.random() * 0.35}
                    rotation={[
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0,
                    ]}
                />
            ))}
        </>
    )
}
