"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

interface ProjectProps {
    id?: string;
    title: string;
    domain: string;
    context: string;
    problem: string;
    solution: string;
    technologies: string[];
    image?: string;
}

export default function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50 }}
            className="group relative flex flex-col pt-24"
        >
            {/* --- FLOATING IMAGE CONTAINER --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-72 h-48">
                <div className="relative w-full h-full rounded-2xl p-2 bg-white dark:bg-zinc-900 shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500 ease-out">
                    <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-zinc-100 dark:border-zinc-800 group-hover:border-blue-500 transition-colors duration-300">
                        <Image
                            src={project.image || "/placeholder.png"}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-30">
                        {project.domain}
                    </div>
                </div>
            </div>

            {/* --- CARD CONTENT --- */}
            <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-[2rem] p-8 pt-36 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full overflow-hidden">

                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full text-center">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-6">
                        {project.context}
                    </p>

                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-4">
                        {project.solution}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-auto flex flex-wrap justify-center gap-2">
                        {project.technologies.slice(0, 5).map((tech, i) => (
                            <span
                                key={i}
                                className="text-[10px] px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-blue-600/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 rounded-[2rem]">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center gap-4 text-white">
                        <h4 className="text-xl font-bold px-6 text-center">{project.title}</h4>
                        <p className="px-8 text-center text-sm text-blue-100 line-clamp-3 mb-2">
                            {project.problem}
                        </p>
                        <Link
                            href={`/projects/${project.id}`}
                            className="flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors"
                        >
                            Voir le projet <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
