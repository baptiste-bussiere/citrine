import { Text, Html, ContactShadows,PresentationControls, SpotLight, Environment, useGLTF, OrbitControls, Plane } from '@react-three/drei'
import { useControls } from 'leva'
import React, { useRef } from 'react';


export default function Experience()

{
  
    const computer = useGLTF('/public/model/model.glb')
    const spotlightRef = useRef();

    const spotlightControls = useControls('sphere', {
      myNumber: { value: 0, step: 1 },

      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      color: {
        r: 255,
        g: 255,
        b: 255,
      },}
    )
    return <>

        <color args={ [ '#000' ] } attach="background" />

        <SpotLight
          ref={spotlightRef}
          rotate={[            
            spotlightControls.rotation.x,
            spotlightControls.rotation.y,
            spotlightControls.rotation.z,

          ]}
          penumbra={1}
          position={[
            spotlightControls.position.x,
            spotlightControls.position.y,
            spotlightControls.position.z,
          ]}
          distance={30}
          angle={2}
          attenuation={0}
          anglePower={10} 
          color={`rgb(${spotlightControls.color.r}, ${spotlightControls.color.g}, ${spotlightControls.color.b})`}
        />

        <OrbitControls />
                {/* <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ff6900' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                /> */}

                <primitive
                    object={ computer.scene }
                   scale={ [ 0.5, 0.5, 0.5 ] }
                    // rotation-x={ 0.13 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ -2, 5.1, 4 ] }
                        rotation={[0, 2.4 ,0]}
                        side={ 0 }
                    >
                        <iframe src="https://bruno-simon.com/html/" />
                    </Html>
                </primitive>
    </>
}