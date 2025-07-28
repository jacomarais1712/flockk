import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomeHeader } from './HomeHeader';

describe('HomeHeader', () => {
  it('renders the main headline correctly', () => {
    render(<HomeHeader />);

    expect(screen.getByText('Grow Your Revenue')).toBeInTheDocument();
    expect(screen.getByText(/with Smarter Ads and Tracking That Works/)).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<HomeHeader />);

    expect(screen.getByText(/We help ambitious businesses grow with expert Google Ads/)).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<HomeHeader />);

    expect(screen.getByRole('button', { name: /book a consultation call/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /learn more about our services/i })).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<HomeHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument(); // header element
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('applies correct responsive classes', () => {
    const { container } = render(<HomeHeader />);
    const header = container.querySelector('header');

    expect(header).toHaveClass('h-[812px]', 'max-md:h-[700px]', 'max-sm:h-[600px]');
  });

  it('renders background blur effect', () => {
    const { container } = render(<HomeHeader />);
    const blurElement = container.querySelector('svg');

    expect(blurElement).toBeInTheDocument();
  });
});
