"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
    text: string | string[];
    speed?: number;
    delay?: number;
    className?: string;
    cursorColor?: string;
}

export default function TypewriterText({
    text,
    speed = 0.05,
    delay = 0,
    className = "",
    cursorColor = "#3b82f6"
}: TypewriterTextProps) {
    const textArray = Array.isArray(text) ? text : [text];
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        let typingSpeed = isDeleting ? 30 : 100;

        if (!isDeleting && displayedText === textArray[loopNum % textArray.length]) {
            typingSpeed = 2000; // Pause at end
            setIsDeleting(true);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            typingSpeed = 500; // Pause before start
        }

        const timeout = setTimeout(() => {
            const currentFullText = textArray[loopNum % textArray.length];

            if (isDeleting) {
                setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
            } else {
                setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, loopNum, textArray, isInView]);

    return (
        <span ref={ref} className={`${className} notranslate`} translate="no">
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ color: cursorColor, marginLeft: "2px", fontWeight: "bold" }}
            >
                |
            </motion.span>
        </span>
    );
}
