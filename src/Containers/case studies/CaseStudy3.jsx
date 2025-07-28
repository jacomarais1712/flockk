import react from 'react'
import CaseStudy from '../../components/caseStudyPage/CaseStudy'

const CaseStudy3 = () => {
    const scrollToTop = (topPosition) => {
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    };
    const statsData3 = [
        {
            value: "1407%",
            description: "Return on AD spend"
        },
        {
            value: "€64K",
            description: "Monthly revenue"
        },
    ];

    const useCaseData3 = {
        overviewP1: "MoAfrika Tours, a premier tour operator in South Africa, sought to increase direct bookings and establish a clear return on their advertising efforts. Their existing Google Ads account lacked structure and effective measurement, hindering performance. Through a comprehensive account restructure, implementation of a full-funnel strategy, and robust tracking via Google Tag Manager, the campaign was transformed into a highly efficient revenue driver. The overhaul resulted in an avg monthly revenue of €64K and a 1407% return on ad spend (ROAS).",
        overviewP2: "",
        projectDetail: {
            service: "Google Ads & Analytics",
            clientName: "MoAfrica Tours",
            industry: "Software Engineering",
            location: "Cape Town, South Africa"
        },
        goals: [
            "Develop a holistic digital strategy to drive both brand awareness and measurable performance",
            "Restructure the existing Google Ads campaigns to align with specific business objectives",
            "Implement robust tracking to accurately measure performance, conversion value, and return on investment.",
            "Transform the Google Ads account into a predictable and profitable sales channel."
        ],  
        actionsTakenHeading: "The Solution: A Data-Driven Restructure and Full-Funnel Approach A multi-faceted strategy was developed to address the core challenges, focusing on structure, targeting, and measurement.",
        actions: [
            "Strategic Account Restructure: The first and most critical step was to overhaul the existing campaign structure. This foundational change enabled: Hyper-Relevant Ad Personalization, Advanced Audience & Remarketing Strategies, Granular Analysis & Optimization.",
            "A Full-Funnel Campaign Mix: With the new structure in place, a combination of campaign types was used to guide potential customers from awareness to purchase. Display Campaigns to build brand awareness and consideration. Search & Dynamic Remarketing to capture high-intent users.",
            "To maximize efficiency, the account was shifted to the Maximize Conversions bid strategy. This allowed Google's machine learning to make real-time bid adjustments, driving the highest possible number of conversions within the budget.",
            "Foundational Tracking & Measurement: To enable true performance measurement, comprehensive tracking was implemented via Google Tag Manager. This included setting up Google Ads conversion tracking and Google Analytics eCommerce tracking, which allowed for the accurate reporting of conversion value and return on ad spend."
        ],
        imageCaption: "Image caption goes here",
        resultsHeading: "Following the restructure and a brief learning phase for the new bid strategies, the account saw a steady and significant increase in performance. Conversions stabilized at an impressive average of 30 per day.",
        results: [
            "Return on Ad Spend (ROAS): 1407%",
            "Avg Monthly Revenue: €64K",
            "Cost Per Acquisition (CPA): €5"
        ],
        resultsFooter: "By implementing a data-driven, full-funnel Google Ads strategy, flockk enabled Entelect to solve its most pressing recruitment challenges. The targeted campaigns successfully filtered for high-quality, senior-level candidates, leading to a threefold increase in applications. This was achieved with remarkable efficiency; the massive growth in brand reach and higher quality applicants was powered by only a minor increase in ad spend, demonstrating a significant and positive return on investment and positioning Entelect as a leading employer in the competitive tech landscape."
    }

    const testiDataExample = {
    name: "Ava Leonard",
    title: "Marketing, XYZ Ltd.",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fd1be130265254b55f4fae608cb591aa3ccf5f?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
    quote: "Flockk transformed our digital presence and exceeded our expectations. Their expertise and dedication were evident from day one.",
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
    }

    const caseStudyHeaderData3 = {
        header: "How MoAfrika Tours Achieved a 1407% ROAS with a Strategic Google Ads Overhaul",
        topicTags: {
            topicTag1: "Google Ads",
            topicTag2: "Tag Management",
            topicTag3: "Google Analytics",
            topicTag4: "Display"
            //add other tags
        },
        companyLogoSrc: "MoAfricaTours.png"
    }
    
    return (
        <CaseStudy caseStudyHData={caseStudyHeaderData3} stats={statsData3} useCase={useCaseData3} testimonial={testiDataExample} scrollToTop={scrollToTop}/>
    )
}

export default CaseStudy3;