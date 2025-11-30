import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        console.log('Newsletter signup:', email);
        localStorage.setItem('newsletter_email', email);

        setIsSubmitted(true);
        setTimeout(() => {
            setEmail('');
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section className="py-32 bg-[#1F1F1F] border-t border-[#3A3A3A]">
            <div className="max-w-[1400px] mx-auto px-12 lg:px-20">
                <div className="max-w-2xl">
                    <h3 className="text-4xl font-bold text-[#ECECEC] mb-4">
                        Stay Updated
                    </h3>
                    <p className="text-lg text-[#A8A8A8] mb-8">
                        Get tips and updates delivered to your inbox.
                    </p>

                    {isSubmitted ? (
                        <div className="inline-flex items-center gap-2 text-emerald-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Thanks for subscribing!</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#3A3A3A] text-[#ECECEC] placeholder-[#A8A8A8]
                                         focus:outline-none focus:border-[#CC785C] transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#CC785C] text-white font-semibold rounded-lg
                                         hover:bg-[#B8694D] transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
