import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { DoubleSide } from "three";

function GroundPlane(props) {
    
    return (
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 10, 1]}>
            <planeGeometry args={props.size}/>
            <meshStandardMaterial color="#bdbdbd" side={DoubleSide}/>
        </mesh>
    );
}

export default GroundPlane;
