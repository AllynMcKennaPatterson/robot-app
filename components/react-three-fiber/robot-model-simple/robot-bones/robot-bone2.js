import ModelContext from "@/pages/Store/modelContext";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";

function RobotBone2(props) {
  const ref = useRef();
  const modelState = useContext(ModelContext)

  useEffect(() => {
    modelState.updateModelState({ joint: "joint2", angle: 1.05 });
  }, [])

  return (
    <group position={[0, 0.5, -4]} rotation={modelState.theModelData.bone2Rotation}>
      <mesh position={props.position} ref={ref} >
        <boxGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </group>

  );
}

export default RobotBone2;
