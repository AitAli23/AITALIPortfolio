"use client";
import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, InstancedMesh, Object3D } from "three";
import { useTheme } from "next-themes";

function DataGrid({ isDark }: { isDark: boolean }) {
    const meshRef = useRef<InstancedMesh>(null!);
    const count = 15;
    const temp = useMemo(() => new Object3D(), []);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        let i = 0;
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 3; y++) {
                const id = i++;
                const xPos = (x - 2) * 5;
                const yPos = (y - 1) * 4;
                const zPos = Math.sin(time + x + y) * 2;

                temp.position.set(xPos, yPos, zPos);
                temp.rotation.x = time * 0.2;
                temp.rotation.y = time * 0.3;
                temp.updateMatrix();
                meshRef.current.setMatrixAt(id, temp.matrix);
            }
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null!, null!, count]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color={isDark ? "#60a5fa" : "#3b82f6"}
                transparent
                opacity={isDark ? 0.2 : 0.1}
                wireframe
            />
        </instancedMesh>
    );
}

export default function EducationBackground3D() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <DataGrid isDark={isDark} />
            </Canvas>
        </div>
    );
}
