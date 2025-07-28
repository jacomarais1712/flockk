import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeStats from './HomeStats';

describe('homeStats', () => {
  it('renders all three statistics', () => {
    render(<HomeStats />);

    expect(screen.getByText('35%')).toBeInTheDocument();
    expect(screen.getByText('€50K+')).toBeInTheDocument();
    expect(screen.getByText('120+')).toBeInTheDocument();
  });

  it('renders all statistic descriptions', () => {
    render(<HomeStats />);

    expect(screen.getByText('Average improvement across optimized accounts')).toBeInTheDocument();
    expect(screen.getByText("Generated from a single client's Google Ads strategy")).toBeInTheDocument();
    expect(screen.getByText('Campaigns launched across eCom, SaaS, lead gen and more.')).toBeInTheDocument();
  });

  it('renders with proper semantic structure', () => {
    render(<HomeStats />);

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();

    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings).toHaveLength(3);
  });

  it('applies correct CSS classes for responsive design', () => {
    render(<HomeStats />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-sm:px-4', 'max-md:px-8', 'px-16');
  });
});
