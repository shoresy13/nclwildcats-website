import React from 'react';
import { NavLink } from 'react-router-dom';
import wildcats from '../assets/images/wildcats-bordered.png';
import buiha from '../assets/images/buiha-bordered.png';

export default function Navbar() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Games", path: "/pagenotfound" },
        { name: "Teams", path: "/pagenotfound" },
        { name: "Gallery", path: "/pagenotfound" },
        { name: "Beginners", path: "/pagenotfound" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-20 px-6 py-4 bg-[#05284b] h-20 flex justify-center items-center border-b-2 border-b-white">
            <ul className="flex space-x-25 text-white tracking-widest">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `cursor-pointer hover:text-gray-300 ${
                                    isActive ? "text-white font-semibold     underline underline-offset-8" : ""
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="absolute -bottom-20 left-6 w-40 h-40">
                <img src={wildcats} alt="Wildcats Logo" className="w-full h-full object-contain" />
            </div>

            <div className="absolute -bottom-20 right-6 w-35 h-40">
                <img src={buiha} alt="BUIHA Logo" className="w-full h-full object-contain" />
            </div>
        </nav>
    );
}