"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

function LoadingShape() {
    const meshRef = React.useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        meshRef.current.rotation.x = time * 0.8;
        meshRef.current.rotation.y = time * 0.5;
        meshRef.current.scale.setScalar(2 + Math.sin(time * 2) * 0.15);
    });

    return (
        <group>
            <Float speed={3} rotationIntensity={2} floatIntensity={1}>
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial
                        color="#3b82f6"
                        speed={4}
                        distort={0.4}
                        radius={1}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>
            </Float>
            <Sparkles count={40} scale={10} size={2.5} speed={0.6} opacity={0.6} color="#60a5fa" />
        </group>
    );
}

const quotes = [
    "Le code est comme l'humour. Quand on l'explique, c'est moins drôle.",
    "La créativité est l'intelligence qui s'amuse.",
    "Innover, c'est savoir abandonner des idées hier.",
    "L'imagination est plus importante que la connaissance.",
    "La meilleure façon de prédire l'avenir est de le créer.",
    "Faites simple, mais pas plus simple.",
    "L'innovation distingue un leader d'un suiveur.",
    "Le design est comment ça fonctionne.",
    "La simplicité est la sophistication suprême.",
    "Les détails font le design."
];

export default function Loader3D() {
    const [progress, setProgress] = useState(0);
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 8; // Légèrement plus lent pour lire les citations
            });
        }, 150);

        const quoteInterval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 3000);

        return () => {
            clearInterval(progressInterval);
            clearInterval(quoteInterval);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950"
        >
            <div className="w-full h-1/2 relative">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={1} />
                    <Suspense fallback={null}>
                        <LoadingShape />
                    </Suspense>
                </Canvas>
            </div>

            <div className="max-w-xl w-full px-10 relative z-10 text-center -mt-10">
                <div className="h-20 mb-10 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={quoteIndex}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.6, ease: "anticipate" }}
                            className="text-lg md:text-xl italic text-zinc-400 font-medium px-4"
                        >
                            "{quotes[quoteIndex]}"
                        </motion.p>
                    </AnimatePresence>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base font-bold mb-6 tracking-[0.3em] text-zinc-500 uppercase"
                >
                    Initialisation du système
                </motion.h2>

                {/* Progress Bar Container */}
                <div className="h-0.5 w-64 mx-auto bg-zinc-800 rounded-full overflow-hidden mb-4">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                <div className="flex justify-center items-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    <span>{Math.round(progress)}%</span>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 blur-[150px] rounded-full animate-pulse delay-1000" />
            </div>
        </motion.div>
    );
}
