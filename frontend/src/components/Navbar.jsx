import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import wildcats from '../assets/images/wildcats-bordered.png';
import buiha from '../assets/images/buiha-bordered.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Games", path: "/pagenotfound" },
        { name: "Teams", path: "/pagenotfound" },
        { name: "Gallery", path: "/pagenotfound" },
        { name: "Beginners", path: "/pagenotfound" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-20 px-4 sm:px-6 py-4 bg-[#05284b] h-20 border-b-2 border-b-white">

            <ul className="hidden sm:flex justify-center text-white tracking-widest
                           gap-x-4 md:gap-x-6 lg:gap-x-25 mt-2">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `cursor-pointer hover:text-gray-300 ${
                                    isActive ? "text-white font-semibold underline underline-offset-8" : ""
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className={`absolute -bottom-12 sm:-bottom-15 lg:-bottom-20 left-6 w-30 sm:w-32 lg:w-40 h-30 sm:h-32 lg:h-40 ${isOpen ? 'hidden' : ''}`}>
                <img src={wildcats} alt="Wildcats Logo" className="w-full h-full object-contain" />
            </div>
            <div className={`absolute -bottom-12 sm:-bottom-15 lg:-bottom-20 right-6 w-26 sm:w-28 lg:w-35 h-26 sm:h-32 lg:h-40 ${isOpen ? 'hidden' : ''}`}>
                <img src={buiha} alt="BUIHA Logo" className="w-full h-full object-contain" />
            </div>

            <div className="sm:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <ul className="flex text-white flex-col sm:hidden absolute top-16 left-0 w-full z-40 bg-[#05284b] p-4 space-y-2 rounded-b-md shadow-lg">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block cursor-pointer hover:text-gray-300 ${
                                        isActive ? "text-white font-semibold underline underline-offset-4" : ""
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}