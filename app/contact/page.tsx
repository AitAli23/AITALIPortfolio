export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact</h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <p className="text-gray-700">
          Vous pouvez me contacter via email ou LinkedIn :
        </p>

        <p>
          <span className="font-medium">Email :</span>{" "}
          <a
            href="mailto:marouane@example.com"
            className="text-blue-600 hover:underline"
          >
            marouane@example.com
          </a>
        </p>

        <p>
          <span className="font-medium">LinkedIn :</span>{" "}
          <a
            href="https://www.linkedin.com/in/marouane-ait-ali/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/marouane-ait-ali
          </a>
        </p>

        <p>
          <span className="font-medium">GitHub :</span>{" "}
          <a
            href="https://github.com/marouaneaitali"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            github.com/marouaneaitali
          </a>
        </p>
      </div>
    </div>
  );
}
