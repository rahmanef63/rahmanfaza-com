import React from 'react';

const services = [
    { title: 'Photoshop Layout', description: 'Create detailed layouts with Photoshop.' },
    { title: '3D VFX Render', description: 'High-quality 3D rendering for interior design.' },
    { title: 'Animation', description: 'Bring your design to life with animations.' },
];

const ServiceSection = () => {
    return (
        <section className="py-20  w-full min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="p-4 border rounded shadow-md">
                        <h3 className="font-bold text-xl">{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;
