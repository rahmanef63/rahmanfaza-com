import React from 'react';

type ButtonProps = {
    text: string;
    onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
