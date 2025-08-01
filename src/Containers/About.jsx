import React, { useState, useEffect, useLayoutEffect } from 'react';
import Header from '../components/reuse/header/Header'
import ExpertiseHero from '../components/aboutPage/expertiseSection/ExpertiseHero'
import AboutStats from '../components/aboutPage/aboutStats/AboutStats'
import ValuesSection from '../components/aboutPage/values/ValuesSection'
import MissionSection from '../components/aboutPage/aboutMission/MissionSection'
import ServicesSection from '../components/reuse/servicesSection/ServicesSection'
import TrustedBrandsCarousel from '../components/reuse/trustedBrandsCarousel/TrustedBrandsCarousel'
import AboutFooterBanner from '../components/aboutPage/aboutFooterBanner/AboutFooterBanner'

const About = () => {
    const HeaderStyle = 'absolute right-[-548px] bottom-[320px] w-[725px] h-[725px] max-sm:right-[-500px] max-sm:opacity-80 rounded-full opacity-70 z-1 aspect-square pointer-events-none'
    const HeaderStyle2 = 'absolute left-[-600px] bottom-[-220px] w-[725px] h-[725px] max-sm:left-[-500px] max-sm:opacity-80 rounded-full opacity-70 z-1 aspect-square pointer-events-none'    
    const servicesHeadline = 'What We Do Best'
    const header = {
        height: "500px",
        width: '755px',
        backgroundBlur: 2, //if only 1 is received, top right will be displayed but not bottom left, 2 will display both
        tagline: 'ABOUT US',
        headline: {
            title: "Your Growth",
            color: "neutral-50"
        },
        extHeadline: {
            title: ", Our Mission",
            color: 'neutral-50'
        },
        description: "Unlock more leads and sales with an expertly crafted Google Ads strategy and analytics that proves it.",
        radialBgs: {
            radial1: {
                style: HeaderStyle,
            },
            radial2: {
                style: HeaderStyle2,
            },
        }
    }
    return (
        <>
            <Header headerObj={header}/>
            <ExpertiseHero />
            <AboutStats />
            <ValuesSection />
            <MissionSection />
            <ServicesSection heading={servicesHeadline}/>
            <TrustedBrandsCarousel />
            <AboutFooterBanner />
        </>
    )
}

export default About;