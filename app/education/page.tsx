import { education } from "../../data/education";

export default function EducationPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Éducation</h1>

      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="border-l-4 border-blue-500 bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{edu.school}</h2>
            <p className="text-gray-700 mt-1">{edu.degree}</p>
            <p className="text-gray-500 mt-1">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
