"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, MeshDistortMaterial, Sphere, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import {
    SiPython, SiCplusplus, SiC, SiDotnet, SiSpringboot,
    SiReact, SiFlutter, SiHibernate, SiNumpy, SiPandas,
    SiGithub, SiPostman, SiSqlite, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript
} from "react-icons/si";
import { FaJava, FaGitAlt } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { Brain, Database, Code2, Sparkles, Layers, Globe, Settings, Shield, Search, Cpu, Terminal, Layout } from "lucide-react";

// --- DATA ---
const skillsData = [
    // Langages
    { name: "C#", category: "Language", color: "#512BD4", icon: TbBrandCSharp },
    { name: "Java", category: "Language", color: "#007396", icon: FaJava },
    { name: "Python", category: "Language", color: "#3776AB", icon: SiPython },
    { name: "TypeScript", category: "Language", color: "#3178C6", icon: SiTypescript },
    { name: "JavaScript", category: "Language", color: "#F7DF1E", icon: SiJavascript },
    { name: "C++", category: "Language", color: "#00599C", icon: SiCplusplus },

    // Frameworks
    { name: ".NET", category: "Framework", color: "#512BD4", icon: SiDotnet },
    { name: "Spring Boot", category: "Framework", color: "#6DB33F", icon: SiSpringboot },
    { name: "React", category: "Framework", color: "#61DAFB", icon: SiReact },
    { name: "Next.js", category: "Framework", color: "#000000", icon: SiNextdotjs },
    { name: "Flutter", category: "Framework", color: "#02569B", icon: SiFlutter },
    { name: "Tailwind", category: "Framework", color: "#06B6D4", icon: SiTailwindcss },

    // IA & Data
    { name: "Machine Learning", category: "AI", color: "#8b5cf6", icon: Brain },
    { name: "Pandas", category: "Data", color: "#150458", icon: SiPandas },
    { name: "NumPy", category: "Data", color: "#013243", icon: SiNumpy },
    { name: "SQL Server", category: "Data", color: "#CC2927", icon: Database },

    // Tools
    { name: "Git", category: "Tool", color: "#F05032", icon: FaGitAlt },
    { name: "GitHub", category: "Tool", color: "#181717", icon: SiGithub },
    { name: "VS Code", category: "Tool", color: "#007ACC", icon: VscVscode },
    { name: "Postman", category: "Tool", color: "#FF6C37", icon: SiPostman },
];

const professionalKeywords = [
    "Architecture", "Clean Code", "Full Stack", "AI",
    "Cloud", "DevOps", "Agile", "API", "Database",
    "UI/UX", "Problem Solving", "Integration", "Data",
    "Mobile", "Security", "Scalability", "Testing", "CI/CD"
];

// --- 3D COMPONENTS ---
function SkillWord({ word, position, color }: { word: string, position: [number, number, number], color: string }) {
    const textRef = useRef<THREE.Group>(null!);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (textRef.current) {
            textRef.current.quaternion.copy(state.camera.quaternion);
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group
                position={position}
                ref={textRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <Text
                    fontSize={0.4}
                    color={hovered ? "#ffffff" : color}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={hovered ? 0.02 : 0}
                    outlineColor={color}
                >
                    {word}
                </Text>
            </group>
        </Float>
    );
}

function Cloud({ radius = 5 }) {
    const words = useMemo(() => {
        const temp = [];
        const count = professionalKeywords.length;
        for (let i = 0; i < count; i++) {
            const word = professionalKeywords[i];
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
            const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#6366f1"];
            temp.push({
                word,
                position: [pos.x, pos.y, pos.z] as [number, number, number],
                color: colors[i % colors.length]
            });
        }
        return temp;
    }, [radius]);

    return (
        <group>
            {words.map((props, i) => <SkillWord key={i} {...props} />)}
        </group>
    );
}

function Scene() {
    const groupRef = useRef<THREE.Group>(null!);
    useFrame(() => { groupRef.current.rotation.y += 0.001; });

    return (
        <group ref={groupRef}>
            <Cloud radius={6} />
            <Sphere args={[2.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#1e293b"
                    speed={1.5}
                    distort={0.3}
                    radius={1}
                    transparent
                    opacity={0.05}
                    wireframe
                />
            </Sphere>
        </group>
    );
}

// --- UI COMPONENTS ---

const FilterTabs = ({ activeTab, setActiveTab, categories }: { activeTab: string, setActiveTab: (c: string) => void, categories: string[] }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-full border border-zinc-200 dark:border-zinc-800 w-fit mx-auto">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10 ${activeTab === cat ? "text-white" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                        }`}
                >
                    {activeTab === cat && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-500/30"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {cat}
                </button>
            ))}
        </div>
    );
};

const SkillCard = ({ skill }: { skill: typeof skillsData[0] }) => {
    const Icon = skill.icon;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-default overflow-hidden"
        >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Container */}
            <div
                className="relative p-4 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                style={{ backgroundColor: `${skill.color}10` }}
            >
                <Icon className="w-10 h-10" style={{ color: skill.color }} />
                <div
                    className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                />
            </div>

            {/* Text */}
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 relative z-10">
                {skill.name}
            </h3>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 relative z-10">
                {skill.category}
            </span>
        </motion.div>
    );
};

export default function Skills3D() {
    const [activeTab, setActiveTab] = useState("All");
    const [mounted, setMounted] = useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const categories = ["All", "Language", "Framework", "AI", "Data", "Tool"];

    const filteredSkills = activeTab === "All"
        ? skillsData
        : skillsData.filter(s => s.category === activeTab);

    return (
        <section id="skills" className="py-32 px-6 relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950">

            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                {mounted && (
                    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <Scene />
                        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                )}
            </div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        <span className="text-gradient">Expertise</span> Technique
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Une maîtrise approfondie des technologies modernes pour concevoir des solutions robustes et évolutives.
                    </p>
                </motion.div>

                <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} categories={categories} />

                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                    <AnimatePresence mode="wait">
                        {filteredSkills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-50 dark:from-black to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-50 dark:from-black to-transparent z-10" />
        </section>
    );
}
