import { Canvas, useFrame } from "@react-three/fiber";
import classes from "./test-scene.module.css";
import { useState } from "react";
import GroundPlane from "../ground-plane/ground-plane";
import RobotBone1 from "../robot-model-simple/robot-bones/robot-bone1";
import RobotBase from "../robot-model-simple/robot-base/robot-base";
// import { OrbitControls } from "@react-three/drei";

function TestScene() {
  const [ baseRotation, setBaseRotation] = useState([0,0,0]);


  return (
    <div className={classes.sceneContainer}>
      <Canvas camera={{ fov: 40, position: [-14, 8, 3]}}>
        <directionalLight position={[0, 0, 2]} intensity={1} />
        <ambientLight intensity={1} />
        <GroundPlane/>
        <group position={[0, 0,-1]}>
          <RobotBase position={[0, 0.5, 0]} color={"#0095e6"} size={[2, 1, 3]} rotation={[0, 0, 0]}/>
          <RobotBone1 position={[0, 0, -2]} color={"#0095e6"} size={[1, 1, 4]} rotation={[0, 0, 0]}/> 
        </group>
        
        {/* <TestCube position={[0, 0, 0]} color={"#0095e6"} size={[1, 1, 1]} /> */}
        {/* <Torus position={[2, 0, 0]} size={[0.5, 0.1, 30, 30]} color={"hotpink"}/> */}
        {/* <OrbitControls/> */}
        <gridHelper />
      </Canvas>
    </div>
  );
}

export default TestScene;
