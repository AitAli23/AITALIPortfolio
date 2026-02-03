import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle2, Layers, MapPin, Wrench } from "lucide-react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

import ProjectBackground3D from "@/components/ProjectBackground3D";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: PageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="relative min-h-screen text-zinc-900 dark:text-zinc-100 pt-24 pb-20 overflow-hidden">
            <ProjectBackground3D />
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Retour à l'accueil
                </Link>

                {/* Header Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                            <Layers className="w-4 h-4" />
                            {project.domain}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            {project.title}
                        </h1>

                        <div className="flex flex-col gap-3 text-zinc-500 dark:text-zinc-400">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-500" />
                                <span>{project.context}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                        <Image
                            src={project.image || "/placeholder.png"}
                            alt={project.title}
                            width={1920}
                            height={1080}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Problem Section */}
                    <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
                                <Wrench className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold">La Problématique</h2>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {project.problem}
                        </p>
                    </div>

                    {/* Solution Section */}
                    <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold">La Solution</h2>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
