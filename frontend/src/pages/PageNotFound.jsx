import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button.jsx";

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
            <h1 className="font-extrabold tracking-widest mt-20 text-[clamp(1.2rem,5vw,3rem)] sm:text-[clamp(2rem,4vw,5rem)]">
                WEBSITE IN DEVELOPMENT
            </h1>
            <h2 className="font-bold tracking-widest mt-4 text-[clamp(0.9rem,3.5vw,1.5rem)] sm:text-[clamp(1.2rem,3vw,2.5rem)]">
                PAGE NOT FOUND, CONTACT jacoblewisshores@gmail.com
            </h2>

            <div className="mt-8">
                <Button
                    text="Go Back"
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    );
}