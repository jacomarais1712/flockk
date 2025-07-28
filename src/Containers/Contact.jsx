import react from 'react';
import Header from '../components/reuse/header/Header'
import ContactSection from '../components/contact/ContactSection'
import ContactFAQ from '../components/contact/contacFaqSection/ContactFAQ';
import TestimonialSection from '../components/reuse/testimonials/TestimonialSection';
import TrustedBrands from '../components/reuse/trustedBrandsCarousel/TrustedBrandsCarousel';
import ContactFooter from '../components/contact/contactFooterBanner/ContactFooter'

const Contact = () => {
    const scrollToContact = (topPosition, rightPosition) => {
        window.scrollTo({
        top: topPosition,
        right: rightPosition,
        behavior: 'smooth'
    });
  }
    const contactHeaderStyle = 'absolute right-[-26vw] bottom-[-10vh] w-[50vw] h-[50vw] rounded-full opacity-55 z-1 aspect-square'
    const header = {
        height: "500px",
        width: "600px",
        backgroundBlur: 1, //if only 1 is received, top right will be displayed but not bottom left, 2 will display both
        tagline: 'CONTACT US',
        headline: {
            title: "Let's Chat About Ads",
            color: "neutral-50"
        },
        extHeadline: {
            title: "",
            color: 'neutral-50'
        },
        description: "Unlock more leads and sales with an expertly crafted Google Ads strategy and analytics that proves it.",
        radialBgs: {
            radial1: {
                style: contactHeaderStyle,
            },
        }
    }
    const testimonies = {
        heading: false,
        amount: 1,
        background: false
    }

    return (
        <>
            <Header headerObj={header}/>
            <ContactSection />
            <ContactFAQ scrollToContact={scrollToContact}/>
            <TestimonialSection testimonies={testimonies}/>
            <TrustedBrands />
            <ContactFooter scrollToContact={scrollToContact}/>
        </>

    )
}

export default Contact;