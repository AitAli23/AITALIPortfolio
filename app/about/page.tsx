import { about } from "../../data/about";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">À propos de moi</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">{about.name}</h2>
        <p className="text-gray-700 mb-2">{about.role}</p>
        <p className="text-gray-600 whitespace-pre-line">{about.description}</p>
      </div>
    </div>
  );
}
