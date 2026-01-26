"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Marouane AIT ALI
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/education" className="hover:text-blue-500">Education</Link>
          <Link href="/skills" className="hover:text-blue-500">Skills</Link>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-2 shadow-md">
          <Link href="/about" className="block">About</Link>
          <Link href="/education" className="block">Education</Link>
          <Link href="/skills" className="block">Skills</Link>
          <Link href="/projects" className="block">Projects</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
