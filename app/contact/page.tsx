import React from 'react';
import { setTimeout } from 'timers';
import Footer from '../components/Footer';
import PageHeroSection from '../components/PageHeroSection';
import { ContactView } from '../components/ContactShow';

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Contact() {
    // await delay(5000);
    return (
        <div>
            <div className="relative z-30">
                <div className="max-w-7xl mx-auto pt-40">
                    <PageHeroSection text="Let's talk"/>
                </div>
                <div className="max-w-7xl mx-auto">
                    <ContactView/>
                </div>
                <div className="mt-20 z-30 px-5 pb-9">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

