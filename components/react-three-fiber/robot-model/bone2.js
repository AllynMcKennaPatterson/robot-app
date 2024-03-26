import React, { useContext, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'
import ModelContext from '@/pages/Store/modelContext'

export default function Bone2(props) {
  const groupRef = useRef()
  const modelState = useContext(ModelContext)
  const gltf = useLoader(GLTFLoader, '/assets/models/Bone2.gltf')

  useEffect(() => {
    modelState.updateModelState({ joint: "joint1", angle: 90 });
  }, [])

  return (
    <group ref={groupRef} {...props} dispose={null} rotation={modelState.theModelData.bone2Rotation} position={[0, 0.4, -7.8]}> 
          <primitive
            object={gltf.scene}
              position={[0, -2.86, 15.035]}
              rotation={[(190) * (Math.PI/180), (0) * (Math.PI/180), (90) * (Math.PI/180)]}
              scale={[0.03, 0.03, 0.03]}
          />
    </group>
  )
}

useGLTF.preload('/assets/models/Bone2.gltf')