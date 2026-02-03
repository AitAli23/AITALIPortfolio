"use client";

import Navbar from "../components/Navbar";
import HeroPhoto from "../components/HeroPhoto";
import HeroBackground3D from "../components/HeroBackground3D";
import ProjectBackground3D from "../components/ProjectBackground3D";
import ContactBackground3D from "../components/ContactBackground3D";
import Skills3D from "../components/Skills3D";
import ProjectCard from "../components/ProjectCard";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExtracurricularSection from "../components/ExtracurricularSection";
import { motion } from "framer-motion";
import { about } from "../data/about";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import {
  fadeInUp,
  springUp,
  staggerContainer,
  staggerItem,
  buttonHover,
  buttonTap
} from "../lib/animations";
import TypewriterText from "../components/TypewriterText";
import Loader3D from "../components/Loader3D";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hasCheckedVisit, setHasCheckedVisit] = useState(false);

  useEffect(() => {
    // Vérifier si le loader a déjà été affiché dans cette session
    if (typeof window === "undefined") return;

    let hasLoaded = null;
    try {
      hasLoaded = sessionStorage.getItem("portfolio-loaded");
    } catch (e) {
      console.error("SessionStorage not available", e);
    }

    if (hasLoaded) {
      setLoading(false);
      setHasCheckedVisit(true);
      return;
    }

    setHasCheckedVisit(true);
    // Premier chargement de la session
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("portfolio-loaded", "true");
      } catch (e) { }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!hasCheckedVisit) return <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950" />;

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader3D key="loader" />}
      </AnimatePresence>

      <main className={`bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section
          id="hero"
          className="min-h-screen w-full flex items-center pt-20 px-6 relative overflow-hidden"
        >
          <HeroBackground3D />

          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-20">

            {/* TEXTE */}
            <motion.div
              className="md:w-1/2 text-center md:text-left space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={staggerItem}
                className="text-blue-600 font-medium tracking-wider uppercase"
              >
                Bienvenue sur mon portfolio
              </motion.p>

              <motion.h1
                variants={staggerItem}
                className="text-5xl md:text-7xl font-bold tracking-tight"
              >
                Salut, je suis{" "}
                <span className="text-gradient">{about.name.split(" ")[0]}</span>
              </motion.h1>

              <motion.div
                variants={staggerItem}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 min-h-[40px] flex items-center justify-center md:justify-start"
              >
                <TypewriterText
                  text={[about.role, "Développeur Full Stack", "Passionné d'IA"]}
                  className="font-medium"
                />
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="flex gap-4 justify-center md:justify-start"
              >
                <motion.a
                  href="#contact"
                  className="btn-gradient px-8 py-3 text-white rounded-full font-medium cursor-pointer"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  Me contacter
                </motion.a>
                <motion.a
                  href="/MarwanCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-medium hover:border-blue-500 transition-colors cursor-pointer"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  Voir mon CV
                </motion.a>
              </motion.div>

              {/* Icônes sociales */}
              <motion.div
                variants={staggerItem}
                className="flex gap-4 justify-center md:justify-start pt-4"
              >
                <motion.a
                  href="https://github.com/AitAli23"
                  target="_blank"
                  className="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/marouane-ait-ali-b34b65293"
                  target="_blank"
                  className="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:aitalimarouane@ump.ac.ma"
                  className="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Photo avec 3D */}
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <HeroPhoto />
            </motion.div>
          </div>

          {/* Indicateur de scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <AboutSection />

        {/* --- SKILLS SECTION --- */}
        <Skills3D />

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-20 px-6 bg-zinc-100 dark:bg-zinc-900/50 relative overflow-hidden">
          <ProjectBackground3D />

          <motion.div
            className="max-w-7xl mx-auto relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-12 text-center"
            >
              <span className="text-gradient">Projets</span> Réalisés
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <EducationSection />

        {/* --- EXTRACURRICULAR SECTION --- */}
        <ExtracurricularSection />

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 px-6 text-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
          <ContactBackground3D />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="relative z-20"
          >
            <motion.h2
              variants={springUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Prêt à <span className="underline decoration-4 underline-offset-8">collaborer</span> ?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            >
              Je suis actuellement à la recherche d&apos;opportunités de stage ou de collaboration.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="flex justify-center gap-6"
            >
              <motion.a
                href="mailto:aitalimarouane@ump.ac.ma"
                variants={staggerItem}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all border border-white/20 animate-glow-pulse"
              >
                <Mail className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/marouane-ait-ali-b34b65293"
                target="_blank"
                variants={staggerItem}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all border border-white/20"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://github.com/AitAli23"
                target="_blank"
                variants={staggerItem}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all border border-white/20"
              >
                <Github className="w-8 h-8" />
              </motion.a>
            </motion.div>

            <motion.footer
              variants={fadeInUp}
              className="mt-16 text-blue-200/60 text-sm"
            >
              © 2026 Marouane AIT ALI.
            </motion.footer>
          </motion.div>
        </section>
      </main>
    </>
  );
}