import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Mes <span className="text-blue-600">Projets</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Une sélection de projets réalisés lors de mes stages et parcours académique,
            alliant développement web, mobile et solutions créatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
