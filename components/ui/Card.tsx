import React from 'react';

type CardProps = {
    title: string;
    description: string;
};

const Card = ({ title, description }: CardProps) => {
    return (
        <div className="border rounded p-4 shadow-md">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
