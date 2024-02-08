import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useDrag } from '@use-gesture/react';

function TestCube(props) {
    const ref = useRef()

    const [isHovered, setIsHovered] = useState(false)
    const [position, setPosition] = useState([-2, 3, 5]);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    useFrame((state, delta) => {
        const speed = isHovered ? 3 : 1
        // ref.current.rotation.x += delta * speed
        // ref.current.rotation.y += delta * speed
        // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    })

    const bind = useDrag(
        ({ offset: [x, y] }) => {
          const [, , ] = position;
          setPosition([x / aspect, -y / aspect, 0]);
          console.log(position)
        },
        { pointerEvents: true }
      );
    return (
        <mesh position={position} {...bind()} ref={ref}
            onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
            onPointerLeave={(event) => (event.stopPropagation(), setIsHovered(false))}
        >
            <boxGeometry args={props.size} />
            <meshStandardMaterial color={isHovered ? "red" : props.color} />
        </mesh>
    );
}

export default TestCube;
