import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PricingFooterBanner from './PricingFooterBanner';

describe('PricingFooterBanner', () => {
  it('renders the main heading correctly', () => {
    render(<PricingFooterBanner />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Not Sure Which Plan Is Right for You?');
  });

  it('renders the description text', () => {
    render(<PricingFooterBanner />);
    const description = screen.getByText(/We'll help you pick the right package based on your goals and budget/);
    expect(description).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<PricingFooterBanner />);
    const button = screen.getByRole('button', { name: /Book a Free Consultation/ });
    expect(button).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<PricingFooterBanner />);
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('applies correct CSS classes for responsive design', () => {
    render(<PricingFooterBanner />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-md:gap-16', 'max-md:px-8', 'max-md:py-20');
    expect(section).toHaveClass('max-sm:gap-10', 'max-sm:px-5', 'max-sm:py-16');
  });

  it('renders the arrow icon in the button', () => {
    render(<PricingFooterBanner />);
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '33');
    expect(svg).toHaveAttribute('height', '32');
  });
});
