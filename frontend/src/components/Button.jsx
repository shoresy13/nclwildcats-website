import React from "react";

export default function Button({ text = "Click Me", onClick }) {
    return (
        <button
            onClick={onClick}
            className="
                border-2 border-white text-white tracking-widest px-15 py-2
                bg-[rgba(197,13,49,0.7)]
                cursor-pointer
                transition duration-10
                hover:bg-[rgba(197,13,49,0.85)]
                hover:scale-[1.02]
            "
        >
            {text}
        </button>
    );
}