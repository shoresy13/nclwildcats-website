import React from 'react';
import MainLayout from '../layouts/MainLayout.jsx';
import HomeBg from '../assets/images/home-background.png';

export default function HomePage() {
    return (
        <MainLayout>
            <div
                className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: `url(${HomeBg})` }}
            >
                <div className="relative bottom-48 flex flex-col justify-center items-center">
                    <h1 className="text-7xl font-extrabold tracking-widest">
                        NEWCASTLE WILDCATS
                    </h1>
                    <h2 className="text-3xl font-bold tracking-wide mt-4">
                        UNIVERSITY ICE HOCKEY CLUB
                    </h2>
                </div>

            </div>
        </MainLayout>
    );
}