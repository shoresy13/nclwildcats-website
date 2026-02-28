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
                className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: `url(${HomeBg})` }}
            >
                <div className="relative bottom-30 sm:bottom-38 md:bottom-45 flex flex-col justify-center items-center text-center px-4 sm:px-6">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-widest">
                        NEWCASTLE WILDCATS
                    </h1>
                    <h2 className="text-2xl sm:text-2.5xl md:text-3xl font-bold tracking-widest mt-4">
                        UNIVERSITY ICE HOCKEY CLUB
                    </h2>
                </div>

                <div className="relative -bottom-50 mt-10 flex flex-col sm:flex-row gap-4 sm:gap-15">
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