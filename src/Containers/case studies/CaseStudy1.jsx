import react from 'react'
import CaseStudy from '../../components/caseStudyPage/CaseStudy'

const CaseStudy1 = () => {
    const scrollToTop = (topPosition) => {
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    };
    const statsData1 = [
        {
            value: "88%",
            description: "Revenue growth in 18 months"
        },
        {
            value: "€1,800",
            description: "Monthly ad spend scaled from €10K"
        },
    ];

    const useCaseData1 = {
        overviewP1: "Oh My Cake! is a premium online bakery based in Johannesburg, South Africa, offering handcrafted birthday cakes, cupcakes, and macarons. While they deliver nationwide, their growth had relied entirely on organic website traffic. Looking to scale their business and increase online orders, Oh My Cake! turned to digital advertising for the first time.",
        overviewP2: "",
        projectDetail: {
            service: "Google Ads & Analytics",
            clientName: "Oh My Cake!",
            industry: "Food",
            location: "Johannesburg, South Africa"
        },
        goals: [
            "Increase brand awareness and online visibility",
            "Drive consideration and website engagement",
            "Grow online sales and market share"
        ],  
        actionsTakenHeading: "To help Oh My Cake! reach new audiences and convert high-intent users, we implemented a full-funnel Google Ads strategy focused on Search, Display, and Shopping formats.",
        actions: [
            "Search Campaigns targeted lower-funnel, high-intent keywords like “buy cake online” to capture users ready to make a purchase.",
            "Display Campaigns were designed to build brand awareness and drive consideration. We also ran dynamic re-marketing using custom audiences to re-engage users based on their browsing behavior and interests.",
            "Shopping Campaigns showcased product visuals, pricing, and detailed descriptions — helping potential customers make informed purchase decisions directly from the ad.",
            "We also ensured robust measurement infrastructure by setting up Google Ads conversion tracking, Google Analytics Enhanced E-commerce, and event tracking to monitor both primary and micro-conversions across the customer journey."
        ],
        imageCaption: "Image caption goes here",
        resultsHeading: "Although conversions were modest at launch, performance ramped up steadily. Within weeks, Oh My Cake! saw:",
        results: [
            "25% average weekly increase in online purchases",
            "€20K avg monthly revenue in the first 6 months",
            "1333% Return on Ad Spend (ROAS)"
        ],
        resultsFooter: "This exceeded the client’s performance expectations and proved the strong potential of Google Ads in unlocking scaleable, sustainable growth."
    }

    const testiDataExample = {
    name: "Ava Leonard",
    title: "Marketing, XYZ Ltd.",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fd1be130265254b55f4fae608cb591aa3ccf5f?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
    quote: "Flockk transformed our digital presence and exceeded our expectations. Their expertise and dedication were evident from day one.",
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
    }

    const caseStudyHeaderData1 = {
        header: "How Oh My Cake! went from €0 to €20K revenue per month",
        topicTags: {
            topicTag1: "GOOGLE ADS",
            topicTag2: "TAG MANAGEMENT",
            topicTag3: "GOOGLE SHOPPING",
            topicTag4: "PMAX"
            //add other tags
        },
        companyLogoSrc: "OhMyCake.png"
    }
    
    return (
        <CaseStudy caseStudyHData={caseStudyHeaderData1} stats={statsData1} useCase={useCaseData1} testimonial={testiDataExample} scrollToTop={scrollToTop}/>
    )
}

export default CaseStudy1;