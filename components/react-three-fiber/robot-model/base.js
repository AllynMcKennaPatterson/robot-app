import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import ModelContext from "@/pages/Store/modelContext";

export default function Base(props) {
  const groupRef = useRef();
  const modelState = useContext(ModelContext);
  const gltf = useLoader(GLTFLoader, "/assets/models/Robot_Base.gltf");

  useEffect(() => {
    modelState.updateModelState({ joint: "joint1", angle: 90 });
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive
        object={gltf.scene}
        position={[0, -4.65, 0]}
        rotation={[
          270 * (Math.PI / 180),
          0 * (Math.PI / 180),
          90 * (Math.PI / 180),
        ]}
        scale={[0.03, 0.03, 0.03]}
      ></primitive>
    </group>
  );
}

useGLTF.preload("/assets/models/Robot_Base.gltf");
