import ModelContext from "@/pages/Store/modelContext";
import { useContext, useEffect, useRef} from "react";

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
