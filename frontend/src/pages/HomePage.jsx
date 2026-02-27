import React from 'react';
import MainLayout from '../layouts/MainLayout.jsx';
import HomeBg from '../assets/images/home-background.png';

export default function HomePage() {
    return (
        <MainLayout>
            <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${HomeBg})` }}></div>
        </MainLayout>
    );
}