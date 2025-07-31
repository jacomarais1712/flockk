import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/reuse/header/Header'
import TrustedBrandsCarousel from '../components/reuse/trustedBrandsCarousel/TrustedBrandsCarousel'
import ServicesSection from '../components/reuse/servicesSection/ServicesSection'
import HomeStats from '../components/homePage/homeStats/HomeStats'
import HeroSection from '../components/homePage/homeHeroSection/HeroSection'
import CaseStudyHighlights from '../components/reuse/caseStudyHighlights/CaseStudyHighlights'
import TestimonialSection from '../components/reuse/testimonials/TestimonialSection'
import FooterBanner from '/src/components/homePage/homeFooterBanner/FooterBanner'

const Home = () => {
    const BackgroundBlurStyle ='absolute left-[-700px] bottom-[-220px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-50 z-1 aspect-square pointer-events-none'
    const BackgroundBlurStyle2 = 'absolute right-[-748px] bottom-[320px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-55 z-1 aspect-square pointer-events-none'
    const homeHeader = {
        height: "513px",
        width: "767px",
        backgroundBlur: 1, //if only 1 is received, top right will be displayed but not bottom left, 2 will display both
        headline: {
            title: "Google Ads & Google Analytics ",
            color: "neutral-50",
            start: {
                text: "We Are ",
                shadow: "emerald-400"
            }
        },
        extHeadline: {
            title: "Specialists",
            color: "emerald-400",
            shadow: "emerald-400"
        },
        description: "Empowering SME's with expertly crafted, data-driven ad campaigns that maximise results & prove value.",
        radialBgs: {
            radial1: {
                style: BackgroundBlurStyle,
            },
            radial2: {
                style: BackgroundBlurStyle2
            }
        }, 
        buttons: { //set the 2 buttons you need, the second button will not have an arrow
            button1: {
                name: "Book a Call",
                arrowIcon: true,
                link: "/contact"
            },
            button2: {
                name: "See What We Do",
                link: "/about"
            }
        }
    }
    const testimoniesPer = {
        amount: 2,
        background: true
    };
    const serviceHeading = 'What We Do Best'
    return (
        <>
            <Header headerObj={homeHeader} />
            <TrustedBrandsCarousel />
            <ServicesSection heading={serviceHeading}/>
            <HomeStats />
            <HeroSection />
            <CaseStudyHighlights />
            {/* <TestimonialSection testimonies={testimoniesPer}/> */}
            <FooterBanner />
        </>

    )
}

export default Home