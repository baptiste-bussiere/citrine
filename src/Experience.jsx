import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  OrbitControls,
  SoftShadows,
  Environment,
  useHelper,
  useGLTF,
  Shadow,
  Plane,
} from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useControls } from "leva";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";

export default function Experience() {
  const computer = useGLTF("/public/model/model.glb");
  const spotlightRef = useRef();
  const [hidden, set] = useState();
  console.log(OrbitControls);

  useHelper(spotlightRef, RectAreaLightHelper, "cyan");
  const { position, rotation } = useControls({
    position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    rotation: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    color: {
      r: 255,
      g: 255,
      b: 255,
    },
  });

  return (
    <>
      <color args={["#000"]} attach="background" />
      <spotLight
        color={"#ffdebb"}
        position={[0, 10, 0]}
        penumbra={1}
        distance={200}
        angle={1.9}
        attenuation={1}
        intensity={1.2}
        decay={0.1}
      />

      <rectAreaLight
        width={1.8}
        height={1.5}
        intensity={20}
        color={"#0000FF"}
        position={[-2.4, 3.99, 3.4]}
        rotation={[0.07, -0.72, 0.05]}
      />
      <rectAreaLight
        width={0.2}
        height={0.2}
        position={[-3.47, 4.95, 1.33]}
        rotation={[-1.53, -0.05, 0]}
        intensity={2000}
        color={"#ff7b00"}
      />
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.3, 0]}
        args={[1000, 1000]}
      >
        <meshStandardMaterial attach="material" color="black" />
      </Plane>

      <OrbitControls
        enablePan={false}
        minAzimuthAngle={Math.PI / 2}
        maxAzimuthAngle={-Math.PI}
        minPolarAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minDistance={10}
        maxDistance={30}
      />

      <primitive object={computer.scene} position-y={-1.2}></primitive>
      <Html
        ref={spotlightRef}
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1}
        position={[-2.4, 3.92, 3.14]}
        rotation={[0.13, -3.87, -0.09]}
        padding={2}
        occlude="blending"
      >
        <iframe src="http://baptiste-bussiere.fr/bs.png" />
      </Html>

      <ContactShadows position-y={-1.2} opacity={1} scale={20} blur={0.8} />
    </>
  );
}
