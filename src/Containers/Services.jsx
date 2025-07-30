import react, { useState, useEffect, useCallback } from 'react'
import Header from '../components/reuse/header/Header'
import TrustedBrandsCarousel from '../components/reuse/trustedBrandsCarousel/TrustedBrandsCarousel'
import GoogleAdsSection from '../components/servicesPage/googleAdsSection/GoogleAdsSection'
import GoogleAnalyticsSection from '../components/servicesPage/googleAnalyticsSection/GoogleAnalyticsSection'
import TagManagementSection from '../components/servicesPage/tagManagementSection/TagManagementSection'
import DashboardSection from '../components/servicesPage/dashboardsSection/DashboardSection'
import TestimonialSection from '../components/reuse/testimonials/TestimonialSection'
import ServicesFooterBanner from '../components/servicesPage/servicesPageFooterBanner/ServicesFooterBanner'

const Services = () => {
    const BackgroundBlurStyle ='absolute left-[-600px] bottom-[-620px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-45 z-1 aspect-square pointer-events-none'
    const BackgroundBlurStyle2 = 'absolute right-[-600px] bottom-[95px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-55 z-1 aspect-square pointer-events-none'
    const testimoniesPer = {
        amount: 1,
        background: false
    };
    const header = {
        height: "513px",
        width: "755px",
        backgroundBlur: 1, //if only 1 is received, top right will be displayed but not bottom left, 2 will display both
        tagline: 'Services',
        headline: {
            title: "Drive Growth With Our",
            color: "neutral-50"
        },
        extHeadline: {
            title: "Expert Solutions",
            color: "emerald-400"
        },
        description: "Unlock more leads and sales with an expertly crafted Google Ads strategy and analytics that proves it.",
        radialBgs: {
            radial1: {
                style: BackgroundBlurStyle
            },
            radial2: {
                style: BackgroundBlurStyle2
            }
        },
        buttons: { //set the 2 buttons you need, the second button will not have an arrow
            button1: {
                name: "Book a Call",
                arrowIcon: true,
                link: '/contact'
            }
        }
    }
    const handleLinkClick = (topPosition) => {
        window.scrollTo({top: topPosition,behavior: 'smooth'});
    };
    return (
        <>
            <Header headerObj={header}/>
            <TrustedBrandsCarousel />
            <GoogleAdsSection />
            <GoogleAnalyticsSection />
            <TagManagementSection />
            <DashboardSection />
            <TestimonialSection testimonies={testimoniesPer}/>
            <ServicesFooterBanner handleLinkClick={handleLinkClick}/>
        </>
        
    )
}

export default Services