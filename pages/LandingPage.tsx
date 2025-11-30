import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#1F1F1F]">
            <Navigation />
            <Hero />
            <TrustSection />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
};
