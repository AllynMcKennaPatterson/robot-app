import ModelContext from "@/pages/Store/modelContext";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";

function RobotBone1(props) {
  const ref = useRef();
  const modelState = useContext(ModelContext)

  useEffect(() => {
    modelState.updateModelState({ joint: "joint1", angle: 90 });
  }, [])

  return (
    <group position={[0, 0.5, 0.5]} rotation={modelState.theModelData.baseSimpleRotation}>
      <mesh position={props.position} ref={ref} >
        <boxGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </group>

  );
}

export default RobotBone1;
