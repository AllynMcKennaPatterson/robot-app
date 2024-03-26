import { Canvas, useFrame } from "@react-three/fiber";
import classes from "./test-scene.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import GroundPlane from "../ground-plane/ground-plane";
import RobotBone1 from "../robot-model-simple/robot-bones/robot-bone1";
import RobotBase from "../robot-model-simple/robot-base/robot-base";
import RobotBone2 from "../robot-model-simple/robot-bones/robot-bone2";
import ModelContext from "@/pages/Store/modelContext";
import TestCube from "../test-cube/test-cube";
import {
  OrbitControls,
  PivotControls,
  TransformControls,
} from "@react-three/drei";
import Base from "../robot-model/base";
import Bone1 from "../robot-model/bone1";
import Bone2 from "../robot-model/bone2";

function TestScene() {
  const [baseRotation, setBaseRotation] = useState([0, 0, 0]);
  const modelState = useContext(ModelContext);

  useEffect(() => {
    modelState.updateModelState({ joint: "joint1", angle: 90 });
  }, []);

  return (
    <div className={classes.sceneContainer}>
      <Canvas
        camera={{ fov: 60, near: 0.5, far: 1000, position: [-20, 15, 0] }}
      >
        <group position={[0, -3, -5]}>
          <OrbitControls makeDefault />
          <directionalLight
            position={[-8, 12, 8]}
            intensity={5}
            castShadow
            color={"#3da0fd"}
          />
          <directionalLight
            position={[10, 12, -10]}
            intensity={5}
            castShadow
            color={"#3da0fd"}
          />
          <ambientLight intensity={10} />
          <GroundPlane />
          <group
            position={[0, 0, 0]}
            rotation={modelState.theModelData.baseRotation}
          >
            <Base color="#fff" />
            <group
              rotation={modelState.theModelData.bone1Rotation}
              position={[0, 3, 1.35]}
            >
              {" "}
              {/* Joint 1 */}
              <Bone1 />
              <Bone2 />
            </group>
          </group>
          {modelState.targetBlock == true ? (
            <TestCube position={[0, 0, 0]} size={[1, 1, 1]} color={"#ff711f"} />
          ) : (
            <></>
          )}
        </group>
      </Canvas>
    </div>
  );
}

export default TestScene;
