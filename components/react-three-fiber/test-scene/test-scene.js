import { Canvas, useFrame } from "@react-three/fiber";
import classes from "./test-scene.module.css";
import { useState } from "react";
import GroundPlane from "../ground-plane/ground-plane";
import RobotBaseSimple from "../robot-model-simple/robot-base-simple/robot-base-simple";
// import { OrbitControls } from "@react-three/drei";

function TestScene() {
  const [ baseRotation, setBaseRotation] = useState([0,0,0]);


  return (
    <div className={classes.sceneContainer}>
      <Canvas camera={{ fov: 40, position: [-10, 4, 2]}}>
        <directionalLight position={[0, 0, 2]} intensity={1} />
        <ambientLight intensity={1} />
        <GroundPlane/>
          <RobotBaseSimple position={[0, 0, -1]} color={"#0095e6"} size={[2, 1, 2]} rotation={[0, 0, 0]}/> 
        {/* <TestCube position={[0, 0, 0]} color={"#0095e6"} size={[1, 1, 1]} /> */}
        {/* <Torus position={[2, 0, 0]} size={[0.5, 0.1, 30, 30]} color={"hotpink"}/> */}
        {/* <OrbitControls/> */}
        <gridHelper />
      </Canvas>
    </div>
  );
}

export default TestScene;
