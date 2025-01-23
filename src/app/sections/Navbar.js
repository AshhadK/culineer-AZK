"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between py-4 px-6 bg-white shadow-md md:px-16">
            {/* Logo */}
            <div className="flex items-center">
                <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    width={120}
                    height={40}
                />
            </div>

            {/* Navigation Links */}
            <ul
                className={`absolute top-16 left-0 w-full bg-white z-50 md:static md:flex md:items-center md:justify-center md:space-x-8 md:bg-transparent md:w-auto text-base font-medium transition-all duration-300 ${menuOpen ? "block" : "hidden"
                    }`}
            >
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 text-greenPrimary hover:text-gray-500"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 text-gray-600 hover:text-greenPrimary"
                    >
                        Farmers Market
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 text-gray-600 hover:text-greenPrimary"
                    >
                        Producers
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 text-gray-600 hover:text-greenPrimary"
                    >
                        Home Cooks
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 text-gray-600 hover:text-greenPrimary"
                    >
                        Directory
                    </a>
                </li>
            </ul>

            {/* Right Section: Signup Button & Hamburger Menu */}
            <div className="flex items-center space-x-4 md:hidden">
                <a
                    href="#"
                    className="block px-4 py-2 text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-greenPrimary rounded-full shadow-md transform transition-all duration-300"
                >
                    Signup
                </a>
                <button
                    className="block p-2 rounded-md bg-greenPrimary text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Image
                        src="/assets/images/hamburger-two.png"
                        alt="hamburger"
                        width={22}
                        height={22}
                    />
                </button>
            </div>

            {/* Signup Button for Desktop */}
            <div className="hidden md:block">
                <a
                    href="#"
                    className="px-6 py-2 text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-greenPrimary rounded-full shadow-md transform transition-all duration-300"
                >
                    Signup
                </a>
            </div>
        </nav>
    );
}