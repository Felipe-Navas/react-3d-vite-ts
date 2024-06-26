/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import planeScene from '../assets/3d/plane.glb?url'

interface Props {
  isRotating: boolean
  scale: number[]
  position: number[]
  rotation: number[]
}

export const Plane = ({ isRotating, ...props }: Props) => {
  const ref = useRef<any>()
  const { scene, animations } = useGLTF(planeScene)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    if (isRotating) {
      actions['Take 001']?.play()
    } else {
      actions['Take 001']?.stop()
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}
