import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereGroupRef = useRef();
  const sphereRef = useRef();
  
  useFrame((state) => {
    // Auto rotation only (No mouse tracking)
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={sphereGroupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        {/* Outer Wireframe Sphere Only */}
        <Sphere ref={sphereRef} args={[1.3, 32, 32]} scale={2.6}>
          <meshStandardMaterial 
            color="#0A5C36" 
            wireframe 
            transparent 
            opacity={0.4} 
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#0A5C36" />
      <spotLight position={[0, 10, 0]} intensity={1} color="#D4AF37" angle={0.5} penumbra={1} />
      <AnimatedSphere />
      <Environment preset="city" />
    </Canvas>
  );
}
