import react from 'react'
import CaseStudyHeader from './header/CaseStudyHeader'
import CaseStudyStat from './caseStudyStat/CaseStudyStat'
import UseCaseDetail from './useCaseDetail/UseCaseDetail'
import CustTestimonial from './useCaseTesti/CustTestimonial'
import CaseStudyFooterBanner from './caseStudyFooterBanner/CaseStudyFooterBanner'
import CaseStudyHighlights from '../reuse/caseStudyHighlights/CaseStudyHighlights'

const CaseStudy = ({ caseStudyHData, stats, useCase, testimonial, scrollToTop }) => {
    return (
        <>
            <CaseStudyHeader csHeaderData={caseStudyHData}/>
            <CaseStudyStat statsData={stats}/>
            <UseCaseDetail useCaseData={useCase}/>
            <CustTestimonial testiData={testimonial}/>
            <CaseStudyHighlights />
            <CaseStudyFooterBanner scrollToTop={scrollToTop}/>
        </>

    )
}

export default CaseStudy;