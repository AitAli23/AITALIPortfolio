"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { about } from "@/data/about";
import { Code2, Cpu, Globe, Sparkles } from "lucide-react";

const AboutBackground3D = dynamic(() => import("./AboutBackground3D"), { ssr: false });
import Counter from "./Counter";

export default function AboutSection() {
    const stats = [
        { label: "Années d'études", value: 3, icon: Globe },
        { label: "Projets Réalisés", value: 5, icon: Code2 },
        { label: "Technologies", value: 15, icon: Cpu },
    ];

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950">
            <AboutBackground3D />

            <div className="max-w-6xl mx-auto relative z-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            À propos de moi
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Passionné par le <span className="text-gradient">Code</span> et l'<span className="text-gradient">Innovation</span>
                        </h2>

                        <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <p>
                                {about.description.split('\n')[0]}
                            </p>
                            <p>
                                Mon parcours académique et mes projets personnels m'ont permis de développer une expertise solide en développement Full Stack et en ingénierie logicielle. Je suis constamment à la recherche de nouveaux défis pour repousser mes limites.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="px-6 py-3 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <span className="block text-2xl font-bold text-blue-600">Génie Info</span>
                                <span className="text-sm text-zinc-500">Spécialisation</span>
                            </div>
                            <div className="px-6 py-3 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <span className="block text-2xl font-bold text-purple-600">Full Stack</span>
                                <span className="text-sm text-zinc-500">Développement</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual/Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 grid grid-cols-1 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-6 group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        <stat.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                                            <Counter value={stat.value} />+
                                        </h3>
                                        <p className="text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative blob behind stats */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
