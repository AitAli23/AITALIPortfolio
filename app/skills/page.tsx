import { skills } from "../../data/skills";

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Mes Compétences</h1>

      {/* Langages */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Langages</h2>
        <div className="flex flex-wrap gap-3">
          {skills.languages.map((lang) => (
            <span
              key={lang}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* Frameworks & Technologies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frameworks & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {skills.frameworks.map((fw) => (
            <span
              key={fw}
              className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium text-sm"
            >
              {fw}
            </span>
          ))}
        </div>
      </section>

      {/* Intelligence Artificielle & Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Intelligence Artificielle & Data</h2>

        <h3 className="font-medium mt-2 mb-2">Analyse de données</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {skills.aiData.dataAnalysis.map((tool) => (
            <span
              key={tool}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium text-sm"
            >
              {tool}
            </span>
          ))}
        </div>

        <h3 className="font-medium mt-2 mb-2">Machine Learning (Supervisé)</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {skills.aiData.machineLearning.supervisedLearning.map((ml) => (
            <span
              key={ml}
              className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-medium text-sm"
            >
              {ml}
            </span>
          ))}
        </div>

        <h3 className="font-medium mt-2 mb-2">Prétraitement & Évaluation</h3>
        <div className="flex flex-wrap gap-3">
          {[
            ...skills.aiData.machineLearning.preprocessing,
            ...skills.aiData.machineLearning.evaluation,
          ].map((item) => (
            <span
              key={item}
              className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Outils */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Outils</h2>
        <div className="flex flex-wrap gap-3">
          {skills.tools.map((tool) => (
            <span
              key={tool}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
