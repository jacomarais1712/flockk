import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CaseStudyHeader from './CaseStudyHeader';

describe('BlogPostHeader', () => {
  it('renders the main heading correctly', () => {
    render(<CaseStudyHeader />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('How XYZ increased their revenue by 88% in 18 months');
  });

  it('renders the case study tag', () => {
    render(<CaseStudyHeader />);

    const caseStudyTag = screen.getByText('Case Study');
    expect(caseStudyTag).toBeInTheDocument();
    expect(caseStudyTag).toHaveClass('text-emerald-400');
  });

  it('renders topic tags correctly', () => {
    render(<CaseStudyHeader />);

    const metaAdsTag = screen.getByText('Meta Ads');
    const tagManagementTag = screen.getByText('Tag Management');

    expect(metaAdsTag).toBeInTheDocument();
    expect(tagManagementTag).toBeInTheDocument();
    expect(metaAdsTag).toHaveClass('text-neutral-300');
    expect(tagManagementTag).toHaveClass('text-neutral-300');
  });

  it('renders the company logo', () => {
    render(<CaseStudyHeader />);

    const logo = screen.getByRole('img', { hidden: true });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('width', '320');
    expect(logo).toHaveAttribute('height', '164');
  });

  it('has correct semantic structure', () => {
    render(<CaseStudyHeader />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('bg-zinc-900');

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
  });

  it('applies responsive classes correctly', () => {
    render(<CaseStudyHeader />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('max-md:gap-16', 'max-md:px-8', 'max-md:py-20');
    expect(header).toHaveClass('max-sm:gap-10', 'max-sm:px-4', 'max-sm:py-16');
  });

  it('has proper accessibility attributes', () => {
    render(<CaseStudyHeader />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
