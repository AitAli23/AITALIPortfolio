"use client";
import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { useTheme } from "next-themes";

// Formes 3D orbitant autour
function OrbitingShapes({ isDark }: { isDark: boolean }) {
    const groupRef = useRef<Group>(null!);

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta * 0.15;
        groupRef.current.rotation.x += delta * 0.05;
    });

    const shapes = useMemo(() => [
        { position: [6, 2, 0] as [number, number, number], color: isDark ? "#60a5fa" : "#3b82f6", scale: 0.5 },
        { position: [-6, -3, -2] as [number, number, number], color: isDark ? "#c084fc" : "#8b5cf6", scale: 0.4 },
        { position: [3, 5, -1] as [number, number, number], color: isDark ? "#22d3ee" : "#06b6d4", scale: 0.45 },
        { position: [-5, 4, 1] as [number, number, number], color: isDark ? "#34d399" : "#10b981", scale: 0.35 },
        { position: [8, -4, 2] as [number, number, number], color: isDark ? "#fbbf24" : "#f59e0b", scale: 0.3 },
        { position: [-8, 0, -3] as [number, number, number], color: isDark ? "#f87171" : "#ef4444", scale: 0.4 },
        { position: [2, -6, -1] as [number, number, number], color: isDark ? "#f472b6" : "#ec4899", scale: 0.35 },
        { position: [-4, -5, 3] as [number, number, number], color: isDark ? "#818cf8" : "#6366f1", scale: 0.45 },
    ], [isDark]);

    return (
        <group ref={groupRef}>
            {shapes.map((shape, i) => (
                <FloatingShape key={i} {...shape} index={i} isDark={isDark} />
            ))}
        </group>
    );
}

function FloatingShape({ position, color, scale, index, isDark }: {
    position: [number, number, number];
    color: string;
    scale: number;
    index: number;
    isDark: boolean;
}) {
    const meshRef = useRef<Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        meshRef.current.position.y = position[1] + Math.sin(time * 1.5 + index) * 0.5;
        meshRef.current.rotation.x = time * 0.3;
        meshRef.current.rotation.z = time * 0.2;
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color={color}
                wireframe
                transparent
                opacity={isDark ? 0.4 : 0.3}
            />
        </mesh>
    );
}

// Particules brillantes
function Particles({ isDark }: { isDark: boolean }) {
    const particlesRef = useRef<Group>(null!);

    const particles = useMemo(() =>
        Array.from({ length: 120 }, (_, i) => ({
            position: [
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
            ] as [number, number, number],
            scale: Math.random() * 0.05 + 0.02,
        }))
        , []);

    useFrame((state) => {
        particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
        particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    });

    return (
        <group ref={particlesRef}>
            {particles.map((p, i) => (
                <mesh key={i} position={p.position} scale={p.scale}>
                    <sphereGeometry args={[1, 8, 8]} />
                    <meshBasicMaterial color={isDark ? "#93c5fd" : "#60a5fa"} transparent opacity={isDark ? 0.3 : 0.2} />
                </mesh>
            ))}
        </group>
    );
}

export default function HeroBackground3D() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 12], fov: 70 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
                <OrbitingShapes isDark={isDark} />
                <Particles isDark={isDark} />
            </Canvas>
        </div>
    );
}
