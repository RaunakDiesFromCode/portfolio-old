import React from 'react';
import { setTimeout } from 'timers';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import PageHeroSection from '../components/PageHeroSection';
import SkillsShow from '../components/SkillsShow';

// const words = ["better", "cute", "beautiful", "modern"];

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Page() {
    // await delay(5000);
    return (
        <div>
            <div className="relative z-30">
                <div className="max-w-7xl mx-auto p-5 pt-40">
                    <PageHeroSection text='Skills' />
                    <SkillsShow />
                </div>
                <div className="mt-20 z-30 px-5 pb-9">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

