import React from 'react';
import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
    return (
        <div className="relative flex flex-col min-h-screen">
            <Navbar className="absolute top-0 left-0 w-full z-10" />
            <main className="flex-1">{children}</main>
        </div>
    );
}