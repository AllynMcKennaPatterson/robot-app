import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useRef, useState } from "react";
import { useDrag } from '@use-gesture/react';
import { TransformControls } from "@react-three/drei";
import { Group, Vector3 } from "three";
import ModelContext from "@/pages/Store/modelContext";

function TestCube(props) {
    const target = useRef()

    const modelCtx = useContext(ModelContext);
    const [isHovered, setIsHovered] = useState(false)
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    const position = new Vector3();


    function setBoxPositionHandler() {
        target.current.getWorldPosition(position)
        let realPosition = {x: position.x, y: (position.y+3), z: (position.z+5)}
        console.log("Mouse up: " + JSON.stringify(position))
        console.log("Target block: " + JSON.stringify(modelCtx.targetBlockPos))
        modelCtx.setTargetBlockPosition(realPosition)
    }
    return (
        <TransformControls onMouseUp={setBoxPositionHandler} translationSnap={0.5} position={[0, 4, 10]}>
            <group position={[0, -3, -5]}>
               <mesh position={props.position}
                // onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
                // onPointerLeave={(event) => (event.stopPropagation(), setIsHovered(false))}
                ref={target}
            >
                <boxGeometry args={props.size} />
                <meshStandardMaterial color={props.color} />
            </mesh> 
            </group>
        </TransformControls>
    );
}

export default TestCube;
