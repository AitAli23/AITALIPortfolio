"use client";
import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

function FloatingShapes({ isDark }: { isDark: boolean }) {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.1;
            groupRef.current.rotation.x = time * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Torus args={[3, 0.5, 16, 100]} position={[-5, 2, -5]}>
                    <MeshDistortMaterial
                        color={isDark ? "#3b82f6" : "#60a5fa"}
                        speed={2}
                        distort={0.4}
                        transparent
                        opacity={0.3}
                    />
                </Torus>
            </Float>

            <Float speed={5} rotationIntensity={2} floatIntensity={3}>
                <Sphere args={[2, 64, 64]} position={[6, -3, -4]}>
                    <MeshDistortMaterial
                        color={isDark ? "#8b5cf6" : "#a78bfa"}
                        speed={3}
                        distort={0.5}
                        transparent
                        opacity={0.3}
                    />
                </Sphere>
            </Float>

            <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
                <Torus args={[2, 0.2, 16, 100]} position={[2, 4, -8]} rotation={[Math.PI / 4, 0, 0]}>
                    <MeshDistortMaterial
                        color={isDark ? "#ec4899" : "#f472b6"}
                        speed={1.5}
                        distort={0.3}
                        transparent
                        opacity={0.2}
                    />
                </Torus>
            </Float>
        </group>
    );
}

export default function ExtracurricularBackground3D() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
                <FloatingShapes isDark={isDark} />
            </Canvas>
        </div>
    );
}
