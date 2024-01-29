import { useRef, useState } from "react";
import { DoubleSide } from "three";

function GroundPlane(props) {
   return (
        <group>
           <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[15, 15, 1]}>
            <planeGeometry args={props.size}/>
            <meshStandardMaterial color={"#adadad"} side={DoubleSide}/>
        </mesh>
        <gridHelper args={[15, 15, 0xff0000, '#454545']}/>
        </group>
        
    );
}

export default GroundPlane;
