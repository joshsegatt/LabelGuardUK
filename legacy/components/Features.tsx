import React from 'react';

const features = [
    {
        title: "Natasha's Law Compliant",
        description: "Automatically generate labels that meet UK Food Information Regulations 2014."
    },
    {
        title: "Lightning Fast",
        description: "Create professional labels in under 2 minutes. No design skills required."
    },
    {
        title: "14 Allergens Covered",
        description: "All major allergens automatically highlighted and clearly displayed."
    },
    {
        title: "Professional Printing",
        description: "Print 10 labels per A4 sheet with cut lines. Perfect for any printer."
    }
];

export const Features: React.FC = () => {
    return (
        <section className="py-32 bg-[#2A2A2A]">
            <div className="max-w-[1400px] mx-auto px-12 lg:px-20">
                {/* Section Header */}
                <div className="mb-20">
                    <h2 className="text-5xl font-bold text-[#ECECEC] mb-4">
                        Everything You Need
                    </h2>
                    <p className="text-xl text-[#A8A8A8]">
                        Built for UK food businesses
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            <h3 className="text-2xl font-semibold text-[#ECECEC] mb-3 group-hover:text-[#CC785C] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-lg text-[#A8A8A8] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
