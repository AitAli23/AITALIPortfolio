"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function RotatingShape() {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#2563eb" wireframe />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[400px] w-full flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RotatingShape />
      </Canvas>
    </div>
  );
}