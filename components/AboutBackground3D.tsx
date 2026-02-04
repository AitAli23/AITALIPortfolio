"use client";
import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Group, Vector3 } from "three";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";

function FloatingObjects({ isDark }: { isDark: boolean }) {
    const objects = useMemo(() => [
        { type: "torus", position: [4, 2, -5], color: isDark ? "#60a5fa" : "#3b82f6", size: [1.5, 0.4, 16, 32] },
        { type: "sphere", position: [-5, -1, -3], color: isDark ? "#c084fc" : "#8b5cf6", size: [1.2, 32, 32] },
        { type: "torus", position: [-3, 3, -4], color: isDark ? "#22d3ee" : "#06b6d4", size: [0.8, 0.2, 16, 32] },
        { type: "sphere", position: [2, -3, -6], color: isDark ? "#34d399" : "#10b981", size: [1, 32, 32] },
    ], [isDark]);

    return (
        <group>
            {objects.map((obj, i) => (
                <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1} position={obj.position as [number, number, number]}>
                    <mesh>
                        {obj.type === "torus" ? (
                            <torusGeometry args={obj.size as any} />
                        ) : (
                            <sphereGeometry args={obj.size as any} />
                        )}
                        <MeshDistortMaterial
                            color={obj.color}
                            speed={2}
                            distort={0.4}
                            radius={1}
                            transparent
                            opacity={isDark ? 0.3 : 0.2}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export default function AboutBackground3D() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <FloatingObjects isDark={isDark} />
            </Canvas>
        </div>
    );
}
