import { useRef, useState } from "react";
import { DoubleSide } from "three";

function GroundPlane(props) {
   return (
        <group>
           <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[20, 20, 1]}>
            <planeGeometry args={props.size}/>
            <meshStandardMaterial color={"#fff"} side={DoubleSide}/>
        </mesh>
        <gridHelper args={[20, 20, 0xff0000, '#454545']}/>
        </group>
        
    );
}

export default GroundPlane;
