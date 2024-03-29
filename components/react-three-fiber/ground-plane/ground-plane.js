import { useRef, useState } from "react";
import { DoubleSide } from "three";

function GroundPlane(props) {
   return (
        <group>
           <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[30, 30, 1]}>
            <planeGeometry args={props.size}/>
            <meshStandardMaterial color={"#fff"} side={DoubleSide}/>
        </mesh>
        <gridHelper args={[30, 30, 0xff0000, '#454545']}/>
        </group>
        
    );
}

export default GroundPlane;
