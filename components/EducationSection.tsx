"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { education } from "@/data/education";
import Image from "next/image";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import EducationBackground3D from "./EducationBackground3D";

export default function EducationSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section id="education" ref={containerRef} className="py-32 px-6 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950">
            <EducationBackground3D />

            <div className="max-w-5xl mx-auto relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Parcours <span className="text-gradient">Académique</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
                        Une formation d'excellence axée sur l'innovation et la maîtrise technologique.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden md:block" />

                    <div className="space-y-24">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                className="flex flex-col md:flex-row gap-8 items-center"
                            >
                                {/* Content Card - Always first on mobile, alternates on desktop */}
                                <div className={`flex-1 w-full ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                                        <div className="relative bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                                            <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                                                <GraduationCap className="w-6 h-6" />
                                                <span className="font-bold tracking-wider text-sm uppercase">{edu.degree}</span>
                                            </div>

                                            <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                                                {edu.school}
                                            </h3>

                                            <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-4 h-4" />
                                                    {edu.period}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Point - Desktop only */}
                                <div className="relative z-10 flex-shrink-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border-4 border-blue-100 dark:border-blue-900/30 shadow-lg order-2">
                                    <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse" />
                                </div>

                                {/* Logo Card - Always second on mobile, alternates on desktop */}
                                <div className={`flex-1 w-full flex justify-center ${index % 2 === 0 ? "md:order-1 md:justify-start" : "md:order-3 md:justify-end"}`}>
                                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-white dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 shadow-2xl flex items-center justify-center group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                                            <Image
                                                src={edu.logo || "/placeholder.png"}
                                                alt={edu.school}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
