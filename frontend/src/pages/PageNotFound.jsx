import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button.jsx";

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="relative top-30 flex flex-col justify-center items-center text-black">
                <h1 className="text-7xl font-extrabold tracking-widest">
                    WEBSITE IN DEVELOPMENT
                </h1>
                <h2 className="text-3xl font-bold tracking-widest mt-4">
                    PAGE NOT FOUND, CONTACT jacoblewisshores@gmail.com
                </h2>

                <div className="relative -bottom-50 mt-10">
                    <Button
                        text="Go Back"
                        onClick={() => navigate('/')}
                    />
                </div>
            </div>
        </div>
    );
}