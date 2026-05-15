import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereGroupRef = useRef();
  const sphereRef = useRef();
  
  // Track mouse coordinates globally
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to -1 to +1
      mousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    // Auto rotation
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    
    // Mouse tracking movement (Global tracking bypasses pointer-events: none)
    if (sphereGroupRef.current) {
      // Map normalized coordinates to a larger movement range
      const targetX = mousePosition.current.x * 3;
      const targetY = mousePosition.current.y * 3;
      
      sphereGroupRef.current.position.x = THREE.MathUtils.lerp(sphereGroupRef.current.position.x, targetX, 0.05);
      sphereGroupRef.current.position.y = THREE.MathUtils.lerp(sphereGroupRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <group ref={sphereGroupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.4}>
          <MeshDistortMaterial 
            color="#D4AF37" 
            attach="material" 
            distort={0.4} 
            speed={1.5} 
            roughness={0.1}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
        
        {/* Outer Wireframe Sphere */}
        <Sphere args={[1.3, 32, 32]} scale={2.6}>
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
