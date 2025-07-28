import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CaseStudyStat from './CaseStudyStat';

describe('CaseStudyStat', () => {
  it('renders all three statistics', () => {
    render(<CaseStudyStat />);

    expect(screen.getByText('88%')).toBeInTheDocument();
    expect(screen.getByText('Revenue growth in 18 months')).toBeInTheDocument();

    expect(screen.getByText('€1,800')).toBeInTheDocument();
    expect(screen.getByText('Monthly ad spend scaled from €10K')).toBeInTheDocument();

    expect(screen.getByText('10x')).toBeInTheDocument();
    expect(screen.getByText('Return on ad spend achieved')).toBeInTheDocument();
  });

  it('renders with semantic section element', () => {
    const { container } = render(<CaseStudyStat />);
    const section = container.querySelector('section');

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('box-border', 'flex', 'relative', 'flex-col');
  });

  it('has proper responsive layout classes', () => {
    const { container } = render(<CaseStudyStat />);
    const section = container.querySelector('section');

    expect(section).toHaveClass(
      'max-w-[1440px]',
      'max-md:px-8',
      'max-md:py-12',
      'max-sm:px-4',
      'max-sm:py-8'
    );
  });

  it('renders the correct number of dividers', () => {
    const { container } = render(<CaseStudyStat />);
    const dividers = container.querySelectorAll('.bg-white.bg-opacity-10');

    expect(dividers).toHaveLength(2);
  });

  it('maintains proper spacing and layout structure', () => {
    const { container } = render(<CaseStudyStat />);
    const mainContainer = container.querySelector('section > div');
    const statsRow = mainContainer.querySelector('div');

    expect(mainContainer).toHaveClass('gap-16', 'max-md:gap-12', 'max-sm:gap-8');
    expect(statsRow).toHaveClass('gap-6', 'max-sm:flex-col', 'max-sm:gap-8');
  });
});
