import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button.jsx";

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-widest mt-20">
                WEBSITE IN DEVELOPMENT
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold tracking-widest mt-4">
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