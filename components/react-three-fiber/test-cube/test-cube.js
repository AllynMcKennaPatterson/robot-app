import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useDrag } from '@use-gesture/react';
import { TransformControls } from "@react-three/drei";
import { Group, Vector3 } from "three";

function TestCube(props) {
    const target = useRef()

    const [isHovered, setIsHovered] = useState(false)
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    const position = new Vector3()


    function setBoxPositionHandler() {
        target.current.getWorldPosition(position)
        console.log("Mouse up: " + JSON.stringify(position))
    }
    return (
        <TransformControls onMouseUp={setBoxPositionHandler} translationSnap={0.5}>
            <mesh position={props.position}
                onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
                onPointerLeave={(event) => (event.stopPropagation(), setIsHovered(false))}
                ref={target}
            >
                <boxGeometry args={props.size} />
                <meshStandardMaterial color={props.color} />
            </mesh>
        </TransformControls>
    );
}

export default TestCube;
