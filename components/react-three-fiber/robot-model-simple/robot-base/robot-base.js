import ModelContext from "@/pages/Store/modelContext";
import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";

function RobotBase(props) {
  const ref = useRef();
  const modelState = useContext(ModelContext)

  useEffect(() => {
    modelState.updateModelState({ joint: "joint1", angle: 90 });
  }, [])

  return (
      <mesh position={props.position} ref={ref} >
        <boxGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
  );
}

export default RobotBase;
