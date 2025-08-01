import React from 'react';
import { SectionHeader } from './caseStudyHighComp/SectionHeader';
import { CaseStudyCard } from './caseStudyHighComp/CaseStudyCard';
import { BackgroundBlur } from '../../reuse/comp/BackgroundBlur';

export const CaseStudyHighlights = () => {
  const backgroundBlurStyle = 'absolute left-[-400px] bottom-[-231px] w-[725px] h-[725px] max-sm:bottom-[1300px] max-sm:opacity-60 rounded-full opacity-45 z-1 aspect-square pointer-events-none'
  const caseStudies = [
    {
      id: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1dcd32f201e858ebd0ff74b9ccf5453335f1900?width=843",
      logo: '/customer_logos/OhMyCake.png',
      scale: 'scale-75',
      title: "How Oh My Cake! went from €0 to €20K per month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 2,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/501bf25bb9553ae578716004e72a28c58aee1ed9?width=843",
      logo: '/customer_logos/Entelect.png',
      scale: 'scale-65',
      title: "How Entelect Scaled High-Quality Talent Acquisition",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 3,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/187774ef793b0e897c16e7ec4a7a4903114c3ae1?width=843",
      logo: '/customer_logos/MoAfricaTours.png',
      scale: 'scale-60',
      title: "How MoAfrika Tours Achieved a 1407% ROAS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    }
  ];

  const handleReadMore = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@700&display=swap"
      />
      <section className="flex relative flex-col gap-20 items-center self-stretch px-16 py-28 max-md:gap-16 max-md:px-8 max-md:py-20 max-sm:gap-10 max-sm:px-4 max-sm:py-16">
        <SectionHeader />
        <div className="flex relative flex-col gap-16 items-start self-stretch">
          <div className="flex relative gap-6 items-start self-stretch max-md:flex-col max-md:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                caseStudyId={study.id}
                imageUrl={study.imageUrl}
                logo={study.logo}
                logoScale={study.scale}
                logoUrl={study.logoUrl}
                title={study.title}
                description={study.description}
                onReadMore={() => handleReadMore()}
              />
            ))}
          </div>
        </div>
        <BackgroundBlur backgroundStyle={backgroundBlurStyle}/>
      </section>
    </>
  );
};

export default CaseStudyHighlights;
