import React from "react";

export default function LoadingFallback() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950">
            <div className="relative w-16 h-16">
                {/* Simple CSS Spinner */}
                <div className="absolute inset-0 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                <div className="absolute inset-2 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin-reverse" />
            </div>
            <p className="mt-8 text-zinc-500 text-sm tracking-[0.3em] uppercase animate-pulse">
                Chargement...
            </p>
        </div>
    );
}
