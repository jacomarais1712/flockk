import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CaseStudyFooterBanner from './CaseStudyFooterBanner';

// Mock console.log to test the click handler
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('CaseStudyFooterBanner', () => {
  afterEach(() => {
    consoleSpy.mockClear();
  });

  it('renders the main CTA section', () => {
    render(<CaseStudyFooterBanner />);

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('renders the heading with correct text', () => {
    render(<CaseStudyFooterBanner />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Ready To Create Your Own Success Story?');
  });

  it('renders the description text', () => {
    render(<CaseStudyFooterBanner />);

    const description = screen.getByText('Get data-backed growth strategies that actually move the needle.');
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('P');
  });

  it('renders the CTA button', () => {
    render(<CaseStudyFooterBanner />);

    const button = screen.getByRole('button', { name: /let's talk/i });
    expect(button).toBeInTheDocument();
  });

  it('handles button click', () => {
    render(<CaseStudyFooterBanner />);

    const button = screen.getByRole('button', { name: /let's talk/i });
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('CTA button clicked');
  });

  it('has correct responsive classes', () => {
    render(<CaseStudyFooterBanner />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-md:gap-16', 'max-sm:gap-10');
  });

  it('contains the background image container', () => {
    render(<CaseStudyFooterBanner />);

    const imageContainer = screen.getByRole('region').querySelector('.bg-center.bg-cover');
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass('rounded-xl');
  });
});
