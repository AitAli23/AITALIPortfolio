"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { useTheme } from "next-themes";

function BackgroundSparkles({ color }: { color: string }) {
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Sparkles
                count={2000}
                scale={25}
                size={2}
                speed={0.2}
                opacity={0.6}
                color={color}
            />
        </group>
    );
}

function FloatingParticles({ color }: { color: string }) {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sparkles
                count={100}
                scale={12}
                size={4}
                speed={0.4}
                opacity={0.8}
                color={color}
            />
        </Float>
    );
}

export default function ProjectBackground3D() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";
    const starColor = isDark ? "#ffffff" : "#1e293b"; // White in dark, Slate-800 in light
    const particleColor = isDark ? "#3b82f6" : "#2563eb"; // Blue in both, slightly darker in light

    return (
        <div className="absolute inset-0 z-0 w-full h-full opacity-60 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Suspense fallback={null}>
                    <BackgroundSparkles color={starColor} />
                    <FloatingParticles color={particleColor} />
                </Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/80 via-zinc-50/50 to-zinc-50 dark:from-black/80 dark:via-black/50 dark:to-black z-0" />
        </div>
    );
}
