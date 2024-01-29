import { Canvas, useFrame } from "@react-three/fiber";
import classes from "./test-scene.module.css";
import { useContext, useEffect, useState } from "react";
import GroundPlane from "../ground-plane/ground-plane";
import RobotBone1 from "../robot-model-simple/robot-bones/robot-bone1";
import RobotBase from "../robot-model-simple/robot-base/robot-base";
import RobotBone2 from "../robot-model-simple/robot-bones/robot-bone2";
import ModelContext from "@/pages/Store/modelContext";
// import { OrbitControls } from "@react-three/drei";

function TestScene() {
  const [ baseRotation, setBaseRotation] = useState([0,0,0]);
  const modelState = useContext(ModelContext)

  useEffect(() => {
    modelState.updateModelState({ joint: "joint1", angle: 90 });
  }, [])

  return (
    <div className={classes.sceneContainer}>
      <Canvas camera={{ fov: 40, position: [-14, 8, 3]}}>
        <directionalLight position={[0, 0, 2]} intensity={1} />
        <ambientLight intensity={1} />
        <GroundPlane/>
        <group position={[0, 0,-1]}>
          <RobotBase position={[0, 0.5, 0]} color={"#0095e6"} size={[2, 1, 3]} rotation={[0, 0, 0]}/>
          <group rotation={modelState.theModelData.bone1Rotation}> {/* Joint 1 */}
            <RobotBone1 position={[0, 0, -2]} color={"#0095e6"} size={[1, 1, 6]} rotation={[0, 0, 0]}/> 
            <RobotBone2 position={[0, 0, -1]} color={"#0095e6"} size={[1, 1, 2]} rotation={[0, 0, 0]}/> 
          </group>
        </group>
        
      </Canvas>
    </div>
  );
}

export default TestScene;
