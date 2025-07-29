import * as React from "react";
import { ProjectSidebar } from "./useCaseDetailComp/ProjectSidebar";
import { ListItem } from "./useCaseDetailComp/ListItem";
import { QuoteBlock } from "./useCaseDetailComp/QuoteBlock";

    const statsDataExample = [
        {
            value: "88%",
            description: "Revenue growth in 18 months"
        },
        {
            value: "€1,800",
            description: "Monthly ad spend scaled from €10K"
        },
    ];

    const useCaseDataExample = {
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
        actionsTakenHeading: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
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

    const caseStudyHeaderDataExample = {
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

export function UseCaseDetail({ useCaseData }) {
  const listIcon = `<svg id="4066:2216" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="list-icon" style="width: 24px; height: 24px; position: relative"> <foreignObject x="3.26599" y="2.96717" width="18.8801" height="18.0657"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(0.52px);clip-path:url(#bgblur_0_4066_2216_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="1.03283" d="M9.59209 12.3319C9.75309 12.14 9.75309 11.8602 9.59209 11.6684L4.41979 5.50408C4.2588 5.31222 4.2588 5.03246 4.41978 4.84058L4.97035 4.18438C5.06842 4.0675 5.21317 4 5.36574 4H14.3177C14.4702 4 14.615 4.0675 14.713 4.18437L20.9926 11.6684C21.1536 11.8602 21.1536 12.14 20.9926 12.3319L14.713 19.8156C14.615 19.9325 14.4702 20 14.3177 20H5.36574C5.21317 20 5.06842 19.9325 4.97035 19.8156L4.41979 19.1594C4.2588 18.9675 4.25881 18.6878 4.4198 18.4959L9.59209 12.3319Z" fill="#19E48B"></path> <defs> <clipPath id="bgblur_0_4066_2216_clip_path" transform="translate(-3.26599 -2.96717)"><path d="M9.59209 12.3319C9.75309 12.14 9.75309 11.8602 9.59209 11.6684L4.41979 5.50408C4.2588 5.31222 4.2588 5.03246 4.41978 4.84058L4.97035 4.18438C5.06842 4.0675 5.21317 4 5.36574 4H14.3177C14.4702 4 14.615 4.0675 14.713 4.18437L20.9926 11.6684C21.1536 11.8602 21.1536 12.14 20.9926 12.3319L14.713 19.8156C14.615 19.9325 14.4702 20 14.3177 20H5.36574C5.21317 20 5.06842 19.9325 4.97035 19.8156L4.41979 19.1594C4.2588 18.9675 4.25881 18.6878 4.4198 18.4959L9.59209 12.3319Z"></path> </clipPath></defs> </svg>`;

  return (
    <div className="flex flex-col justify-center w-full">
      <section className="flex relative flex-col gap-20 items-center px-16 py-20 w-[1440px] max-md:gap-16 max-md:px-8 max-md:py-16 max-md:w-full max-sm:gap-10 max-sm:px-4 max-sm:py-10">
        <div className="flex relative justify-between items-start self-stretch max-md:flex-col max-md:gap-10">
          <main className="flex relative flex-col items-start w-[755px] max-md:w-full">
            <header className="flex relative flex-col items-start self-stretch pb-4">
              <h1 className="relative self-stretch text-5xl font-bold tracking-tight leading-[56.4px] text-zinc-200 max-md:text-4xl max-sm:text-3xl">
                Overview
              </h1>
            </header>

            <div className="flex relative flex-col items-start self-stretch pb-4">
              <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400">
                {useCaseData.overviewP1}
              </p>
            </div>

            <div className="flex relative flex-col items-start self-stretch pb-4">
              <p className="relative self-stretch text-base tracking-wide leading-6 text-neutral-200">
                {useCaseData.overviewP2}
              </p>
            </div>

            <div className="flex relative flex-col items-start self-stretch px-0 py-6">
              <h2 className="relative self-stretch text-4xl font-medium tracking-normal leading-10 text-neutral-50 max-md:text-3xl max-sm:text-2xl">
                Goals
              </h2>
            </div>

            <div className="flex relative flex-col gap-3 items-start self-stretch">
              <ul className="flex relative flex-col gap-4 items-start self-stretch">
                {useCaseData.goals.map((goal, index) => (
                  <ListItem key={`goal${index}`} icon={listIcon}>
                    {goal}
                  </ListItem>
                ))}
              </ul>
            </div>

            <div className="flex relative flex-col items-start self-stretch px-0 pt-6 pb-5">
              <h2 className="relative self-stretch text-4xl font-medium tracking-normal leading-10 text-neutral-50 max-md:text-3xl max-sm:text-2xl">
                What We Did
              </h2>
            </div>

            <div className="flex relative flex-col gap-3 items-start self-stretch">
              <div className="flex relative flex-col items-start self-stretch pb-4">
                <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400">
                  {useCaseData.actionsTakenHeading}
                </p>
              </div>

              <ul className="flex relative flex-col gap-4 items-start self-stretch">
                {useCaseData.actions.map((action, index) => (
                  <ListItem key={`action${index}`} icon={listIcon}>
                    {action}
                  </ListItem>
                ))}
              </ul>
            </div>

            <figure className="flex relative flex-col gap-2 items-start self-stretch px-0 py-12">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c157349ddd0a96e485a2b27bd51374926b5271f5?width=1510"
                alt=""
                className="relative self-stretch rounded aspect-151/96 h-[480px] max-md:h-[360px] max-sm:h-60"
              />
              <figcaption className="flex relative gap-2 items-start self-stretch">
                <div className="relative self-stretch w-0.5 bg-emerald-400" />
                <p className="relative text-sm tracking-wide leading-6 flex-[1_0_0] text-neutral-300">
                  {useCaseData.imageCaption}
                </p>
              </figcaption>
            </figure>

            <div className="flex relative flex-col items-start self-stretch px-0 pt-5 pb-4">
              <h2 className="relative self-stretch text-4xl font-medium tracking-normal leading-10 text-zinc-200 max-md:text-3xl max-sm:text-2xl">
                The Results
              </h2>
            </div>

            <div className="flex relative flex-col items-start self-stretch pb-4">
              <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400 pb-5">
                {useCaseData.resultsHeading}
              </p>
              <ul className="flex relative flex-col gap-4 items-start self-stretch">
                {useCaseData.results.map((result, index) => (
                  <li className="relative self-stretch text-base tracking-wide leading-6 text-neutral-200" key={`result${index}`} icon={listIcon}>
                    &bull; {result}
                  </li>
                ))}
              </ul>
              <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400 pt-5">
                {useCaseData.resultsFooter}
              </p>              
            </div>
          </main>

          <ProjectSidebar projectDetail={useCaseData.projectDetail} />
        </div>
      </section>
    </div>
  );
}

export default UseCaseDetail;
