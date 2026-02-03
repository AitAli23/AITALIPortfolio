import { Variants } from "framer-motion";

// Animation de base - apparition avec fade et montée
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Animation avec effet de ressort
export const springUp: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

// Animation de gauche à droite
export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Animation de droite à gauche
export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Animation avec scale
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Animation pour les containers avec stagger sur les enfants
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// Animation des éléments enfants pour le stagger
export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Animation de hover pour les cartes
export const cardHover = {
    scale: 1.02,
    y: -5,
    transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
    }
};

// Animation de hover pour les boutons
export const buttonHover = {
    scale: 1.05,
    transition: {
        type: "spring" as const,
        stiffness: 400
    }
};

export const buttonTap = {
    scale: 0.95
};

// Animation de texte lettre par lettre
export const letterAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

// Animation de révélation du bas vers le haut (pour les textes)
export const textReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        clipPath: "inset(100% 0% 0% 0%)"
    },
    visible: {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

// Effet flottant pour des éléments
export const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// Animation de rotation continue
export const rotateAnimation = {
    rotate: 360,
    transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
    }
};
