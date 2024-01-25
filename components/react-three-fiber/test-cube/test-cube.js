import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function TestCube(props) {
    const ref = useRef()

    const [isHovered, setIsHovered] = useState(false)

    useFrame((state, delta) => {
        const speed = isHovered ? 3 : 1
        // ref.current.rotation.x += delta * speed
        // ref.current.rotation.y += delta * speed
        // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2

    })
    return (
        <mesh position={props.position} ref={ref}
            onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
            onPointerLeave={(event) => (event.stopPropagation(), setIsHovered(false))}
        >
            <boxGeometry args={props.size} />
            <meshStandardMaterial color={isHovered ? "red" : props.color} />
        </mesh>
    );
}

export default TestCube;
