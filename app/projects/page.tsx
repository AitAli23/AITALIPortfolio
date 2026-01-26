import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Projets</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col"
          >
            {/* Titre */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>

            {/* Domaine / Contexte */}
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-medium">Domaine :</span> {project.domain}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-medium">Contexte :</span> {project.context}
            </p>

            {/* Problématique */}
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Problématique :</span> {project.problem}
            </p>

            {/* Solution */}
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Solution :</span> {project.solution}
            </p>

            {/* Technologies */}
            <div className="mt-auto">
              <h3 className="font-medium mb-2 text-gray-800">Technologies :</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
