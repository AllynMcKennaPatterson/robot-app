import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Torus(props) {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2

    })
  return (
            <mesh position={props.position} ref={ref}>
                <torusKnotGeometry args={props.size}/>
                <meshStandardMaterial  color={props.color}/>
            </mesh>
  );
}

export default Torus;
