import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css"; // Tailwind CSS

export const metadata = {
  title: "Portfolio AIT ALI Marouane",
  description: "Portfolio d'un étudiant en Génie Informatique et développeur full-stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Navbar />
        <main className="min-h-screen p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
