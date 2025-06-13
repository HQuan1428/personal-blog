// app/components/Header.js
// import { useState } from "react";
import React from "react";
import Link from "next/link";
// import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  //const [darkMode, setDarkMode] = useState(true);

  return (
    
    <header className="py-6">
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo hoặc tên */}
        <div className="text-lg font-semibold">
          Navy Nguyen
        </div>

        {/* Navigation menu */}
        <ul className="flex gap-8 text-base font-normal">
          <li>
            <Link href="#" className="pb-0.5 border-b-2 border-transparent hover:border-white hover:font-bold transition-all">Blog</Link>
          </li>
          <li>
            <Link href="#" className="pb-0.5 border-b-2 border-transparent hover:border-white hover:font-bold transition-all">Projects</Link>
          </li>
          <li>
            <Link href="#" className="pb-0.5 border-b-2 border-transparent hover:border-white hover:font-bold transition-all">About</Link>
          </li>
          <li>
            <Link href="#" className="pb-0.5 border-b-2 border-transparent hover:border-white hover:font-bold transition-all">Newsletter</Link>
          </li>
        </ul>

        {/* Toggle button placeholder (commented) */}
        {/*
        <button
          className="flex items-center bg-white px-4 py-2 rounded-full relative w-16 h-8 justify-between"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle dark mode"
        >
          <span className={`w-4 h-4 rounded-full ${darkMode ? "bg-black" : "bg-white border border-gray-400"}`}></span>
          {darkMode ? (
            <FiMoon className="text-black ml-2" />
          ) : (
            <FiSun className="text-yellow-500 ml-2" />
          )}
        </button>
        */}
      </nav>
    </header>

  );
}