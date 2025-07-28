import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/reuse/header/Header'
import TrustedBrands from '/src/components/homepage/homeTrustedBrands/TrustedBrands'
import ServicesSection from '../components/reuse/servicesSection/ServicesSection'
import HomeStats from '/src/components/homepage/homeStats/HomeStats'
import HeroSection from '/src/components/homepage/homeHeroSection/HeroSection'
import CaseStudyHighlights from '/src/components/reuse/caseStudyHighlights/CaseStudyHighlights'
import TestimonialSection from '../components/reuse/testimonials/TestimonialSection'
import FooterBanner from '/src/components/homepage/homeFooterBanner/FooterBanner'

const Home = () => {
    const BackgroundBlurStyle ='absolute left-[-24vw] bottom-[-100vh] w-[50vw] h-[50vw] rounded-full opacity-45 z-1 aspect-square'
    const BackgroundBlurStyle2 = 'absolute right-[-26vw] bottom-[-10vh] w-[50vw] h-[50vw] rounded-full opacity-55 z-1 aspect-square'
    const homeHeader = {
        height: "513px",
        width: "755px",
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
            <TrustedBrands />
            <ServicesSection heading={serviceHeading}/>
            <HomeStats />
            <HeroSection />
            <CaseStudyHighlights />
            <TestimonialSection testimonies={testimoniesPer}/>
            <FooterBanner />
        </>

    )
}

export default Home