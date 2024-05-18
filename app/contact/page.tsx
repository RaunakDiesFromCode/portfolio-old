import React from 'react';
import { setTimeout } from 'timers';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import PageHeroSection from '../components/PageHeroSection';

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Contact() {
    // await delay(5000);
    return (
        <div>
            <div className="relative z-30">
                <div className="max-w-7xl mx-auto p-5 pt-40">
                    <PageHeroSection text='Contact me' />
                </div>
                <div className="max-w-7xl mx-auto p-5 mt-20">
                    <div className="mt-20">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

