import { Canvas, useFrame } from "@react-three/fiber";
import classes from "./test-scene.module.css";
import TestCube from "../test-cube/test-cube";
import { useRef } from "react";
import { Mesh } from "three";
import Torus from "../test-torus/test-torus";
import { OrbitControls } from "@react-three/drei";



function TestScene() {
  return (
    <div className={classes.sceneContainer}>
        <Canvas>
            <directionalLight position={[0,0,2]} intensity={1}/>
            <ambientLight intensity={0.3}/>
            <TestCube position={[0, 0, 0]} color={"#0095e6"} size={[1, 1, 1]}/>
            {/* <Torus position={[2, 0, 0]} size={[0.5, 0.1, 30, 30]} color={"hotpink"}/> */}
            <OrbitControls/>
        </Canvas>
    </div>
  );
}

export default TestScene;
