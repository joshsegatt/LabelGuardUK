import React from 'react';

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "The Artisan Bakery",
        text: "LabelGuard UK has been a game-changer. We went from hours to minutes creating labels."
    },
    {
        name: "James Thompson",
        role: "Green Valley Café",
        text: "Compliance was always a headache. This tool makes it so easy to stay compliant."
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section className="py-32 bg-[#2A2A2A]">
            <div className="max-w-[1400px] mx-auto px-12 lg:px-20">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-5xl font-bold text-[#ECECEC] mb-4">
                        Trusted by UK Businesses
                    </h2>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="border-l-2 border-[#CC785C] pl-8">
                            <p className="text-xl text-[#ECECEC] mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            <div>
                                <div className="font-semibold text-[#ECECEC]">{testimonial.name}</div>
                                <div className="text-sm text-[#A8A8A8]">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
