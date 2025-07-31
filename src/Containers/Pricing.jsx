import React from 'react';
import Header from '../components/reuse/header/Header'
import PricingSection from '../components/pricingPage/pricingSection/PricingSection';
import FAQ from '../components/reuse/faqSection/FAQ'
import TrustedBrandsCarousel from '../components/reuse/trustedBrandsCarousel/TrustedBrandsCarousel';
import ClientTestimonials from '../components/pricingPage/clientTestimonials/ClientTestimonials';
import PricingFooterBanner from '../components/pricingPage/pricingFooterBanner/PricingFooterBanner';

const Pricing = () => {
    const BgStyle1 ='absolute left-[-500px] bottom-[-254px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-45 z-1 aspect-square pointer-events-none'
    const BgStyle2 = 'absolute right-[-600px] bottom-[141px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-55 z-1 aspect-square pointer-events-none'
    const pricingHeader = {
        height: "513px",
        width: "755px",
        backgroundBlur: 1, //if only 1 is received, top right will be displayed but not bottom left, 2 will display both
        tagline: 'Pricing',
        headline: {
            title: "Transparent Plans. Expert",
            color: "neutral-50"
        },
        extHeadline: {
            title: " Support. Clear Results.",
            color: "neutral-50"
        },
        description: "Whether you're just getting started or scaling aggressively, we've got a plan built for your goals.",
        radialBgs: {
            radial1: {
                style: BgStyle1,
            },
            radial2: {
                style: BgStyle2
            }
        }
    }
    const scrollToContact = (topP) => {
        window.scrollTo({ top: topP, behavior: 'smooth' });
    }
    return (
        <>
            <Header headerObj={pricingHeader}/>
            <PricingSection />
            <FAQ scrollToContact={scrollToContact}/>
            <TrustedBrandsCarousel />
            {/* <ClientTestimonials /> */}
            <PricingFooterBanner />
        </>

    )
}

export default Pricing