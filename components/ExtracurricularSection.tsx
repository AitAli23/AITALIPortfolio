"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { extracurricular } from "@/data/extracurricular";
import Image from "next/image";
import { Users, Camera, Palette, MapPin, Calendar } from "lucide-react";
import ExtracurricularBackground3D from "./ExtracurricularBackground3D";

const getIcon = (role: string) => {
    if (role.toLowerCase().includes("media")) return <Camera className="w-6 h-6" />;
    if (role.toLowerCase().includes("design")) return <Palette className="w-6 h-6" />;
    return <Users className="w-6 h-6" />;
};

export default function ExtracurricularSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section id="extracurricular" ref={containerRef} className="py-32 px-6 relative overflow-hidden bg-white dark:bg-zinc-900/30">
            <ExtracurricularBackground3D />

            <div className="max-w-7xl mx-auto relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Activités <span className="text-gradient">Parascolaires</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
                        Mon engagement associatif et mes contributions créatives au sein de la vie étudiante.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {extracurricular.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Decorative Shape Backdrop */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative h-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center hover:border-blue-500/50 transition-all duration-500 shadow-xl">

                                {/* Image Container with Creative Shape */}
                                <div className="relative w-32 h-32 mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" />
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                        <Image
                                            src={item.logo || "/placeholder.png"}
                                            alt={item.organization}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Role Icon */}
                                <div className="mb-4 p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-500">
                                    {getIcon(item.role)}
                                </div>

                                <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 line-clamp-2 min-h-[4rem] flex items-center justify-center">
                                    {item.organization}
                                </h3>

                                <p className="text-blue-600 dark:text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs">
                                    {item.role}
                                </p>

                                <div className="mt-auto space-y-3">
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-zinc-400">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {item.period}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {item.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
