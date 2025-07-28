import react from 'react'
import CaseStudy from '../../components/caseStudyPage/CaseStudy'

const CaseStudy2 = () => {
    const scrollToTop = (topPosition) => {
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    };
    const statsData2 = [
        {
            value: "869%",
            description: "Increase in reach"
        },
        {
            value: "213%",
            description: "Increase in applications"
        },
    ];

    const useCaseData2 = {
        overviewP1: "Entelect, a leading software development company in South Africa, was experiencing rapid growth and faced the critical challenge of scaling its team with high-quality, senior-level developers. To solve this, they partnered with digital marketing agency Flockk to develop and execute a sophisticated Google Ads strategy. With only a modest 21% increase in ad spend, the collaboration delivered an exceptional return on investment. The campaign resulted in a 213% increase(YoY) in applications and expanded brand reach by a massive 870%(YoY). The strategy also generated over 2.26 million video views (12 months), successfully filling Entelect's talent pipeline while simultaneously boosting brand authority.",
        overviewP2: "",
        projectDetail: {
            service: "Google Ads & Analytics",
            clientName: "Entelect",
            industry: "Software Engineering",
            location: "Cape Town, South Africa"
        },
        goals: [
            "Attract more senior developers with specific skill sets",
            "A predictable and scalable channel to find talent",
            "Increase Entelect's brand presence and engagement within the developer community"
        ],  
        actionsTakenHeading: "Flockk designed a comprehensive, full-funnel Google Ads strategy aimed at reaching the right candidates at every stage of their job search journey. To capture candidates actively looking for new roles, flockk built highly-targeted Search campaigns. The strategy moved beyond broad terms, focusing on:",
        actions: [
            "Thematic Keyword Groups: Keywords were tightly grouped by specific roles to ensure maximum relevance.",
            "Tailored Ad Copy & Landing Pages: Each ad group was paired with unique ad copy and directed to a specific, relevant job landing page on the Entelect careers site. This ensured a seamless user experience and improved Quality Score.",
            "Broadening Reach with Display & Video: To build a pipeline and engage passive candidates, Display and YouTube campaigns were crucial.",
            "Strategic Audience Targeting: Flockk utilized custom segments ensuring ads were shown to a highly relevant audience.",
            "Engaging Video Content: The dual goal was to drive high-quality traffic to job roles and significantly increase views and subscribers for Entelect's own YouTube channel, establishing them as thought leaders.",
            "Intelligent Remarketing: A remarketing strategy was implemented to re-engage users, keeping Entelect top-of-mind."
        ],
        imageCaption: "Image caption goes here",
        resultsHeading: "The data, comparing the 12 months of Flockk's management to the preceding 12 months, highlights the incredible efficiency of the campaign. A minimal increase in budget fuelled dramatic growth across all key metrics.",
        results: [
            "Reach: +869.97% (from 1.05 million to 10.2 million)",
            "Applications: +213.31% (from 848 to 2,657)",
            "Video Views: Over 2.26 million"
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

    const caseStudyHeaderData2 = {
        header: "How Entelect Scaled High-Quality Talent Acquisition with Google Ads",
        topicTags: {
            topicTag1: "GOOGLE ADS",
            topicTag2: "TAG MANAGEMENT",
            topicTag3: "GOOGLE ANALYTICS",
            topicTag4: "DISPLAY",
            topicTag5: "VIDEO",
            //add other tags
        },
        companyLogoSrc: "Entelect.png"
    }
    
    return (
        <CaseStudy caseStudyHData={caseStudyHeaderData2} stats={statsData2} useCase={useCaseData2} testimonial={testiDataExample} scrollToTop={scrollToTop}/>
    )
}

export default CaseStudy2;