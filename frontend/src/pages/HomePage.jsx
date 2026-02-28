import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Button from '../components/Button.jsx';
import HomeBg from '../assets/images/home-background.png';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <MainLayout>
            <div
                className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white overflow-hidden"
                style={{ backgroundImage: `url(${HomeBg})` }}
            >
                <div className="relative bottom-30 sm:bottom-32 md:bottom-45 flex flex-col justify-center items-center text-center px-4 sm:px-6">
                    <h1 className="font-extrabold tracking-widest whitespace-nowrap text-[clamp(1.5rem,6vw,4rem)] sm:text-[clamp(1.5rem,5vw,5rem)] md:text-7xl">
                        NEWCASTLE WILDCATS
                    </h1>
                    <h2 className="font-bold tracking-widest whitespace-nowrap text-[clamp(1.2rem,4vw,2rem)] sm:text-[clamp(1.5rem,3.5vw,2.5rem)] md:text-3xl">
                        UNIVERSITY ICE HOCKEY CLUB
                    </h2>
                </div>

                <div className="relative -bottom-45 sm:-bottom-45 md:-bottom-50 mt-10 flex flex-col sm:flex-row gap-4 sm:gap-15">
                    <Button
                        text="Join Now"
                        onClick={() => navigate('/pagenotfound')}
                    />
                    <Button
                        text="Learn More"
                        onClick={() => navigate('/pagenotfound')}
                    />
                </div>
            </div>
        </MainLayout>
    );
}