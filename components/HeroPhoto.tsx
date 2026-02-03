"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroPhoto() {
    return (
        <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
            {/* Photo de profil au centre */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 mt-12"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl opacity-50 animate-pulse" />

                {/* Photo */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-4 border-white/20 shadow-2xl transition-all duration-500 hover:scale-105">
                    <Image
                        src="/R6__63272.JPG"
                        alt="Marouane AIT ALI"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>
        </div>
    );
}
