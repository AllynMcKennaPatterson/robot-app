import ModelContext from "@/pages/Store/modelContext";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";

function RobotBaseSimple(props) {
  const ref = useRef();
  const modelState = useContext(ModelContext)

  useEffect(() => {
    modelState.updateModelState({ joint: "joint1", angle: 10 });
    console.log("ModelState: " + modelState.theModelData.baseSimpleRotation)
  }, [])

  return (
    <group position={[0, 0, 0]} rotation={modelState.theModelData.baseSimpleRotation}>
      <mesh position={props.position} ref={ref} >
        <boxGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </group>

  );
}

export default RobotBaseSimple;
