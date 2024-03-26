import React, { useContext, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'
import ModelContext from '@/pages/Store/modelContext'

export default function Bone1(props) {
  const groupRef = useRef()
  const modelState = useContext(ModelContext)
  const gltf = useLoader(GLTFLoader, '/assets/models/Bone1.gltf')

  useEffect(() => {
    modelState.updateModelState({ joint: "joint1", angle: 90 });
  }, [])

  return (
    <group ref={groupRef} {...props} dispose={null}>
          <primitive
            object={gltf.scene}
              position={[0, -2.659, 7.30]}
              rotation={[(190) * (Math.PI/180), (0) * (Math.PI/180), (90) * (Math.PI/180)]}
              scale={[0.03, 0.03, 0.03]}
          />
    </group>
  )
}

useGLTF.preload('/assets/models/Bone1.gltf')