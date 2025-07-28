import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutStats from './AboutStats';
import StatItem from './aboutStatsComp/StatItem';
import StatDivider from './aboutStatsComp/StatDivider';

describe('Stats2 Component', () => {
  it('renders the main heading correctly', () => {
    render(<AboutStats />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Long heading is what you see here in this stat section');
  });

  it('renders the description text', () => {
    render(<AboutStats />);
    const description = screen.getByText(/Lorem ipsum dolor sit amet/);
    expect(description).toBeInTheDocument();
  });

  it('renders all four statistics', () => {
    render(<AboutStats />);

    expect(screen.getByText('35%')).toBeInTheDocument();
    expect(screen.getByText('€50K+')).toBeInTheDocument();
    expect(screen.getByText('10x')).toBeInTheDocument();
    expect(screen.getByText('120+')).toBeInTheDocument();
  });

  it('renders all stat descriptions', () => {
    render(<AboutStats />);

    expect(screen.getByText('Avg. drop in CPA across optimized accounts')).toBeInTheDocument();
    expect(screen.getByText('Revenue generated per month for one client')).toBeInTheDocument();
    expect(screen.getByText('ROAS Achieved in targeted B2B campaigns')).toBeInTheDocument();
    expect(screen.getByText('Campaigns built across 15+ industries')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<AboutStats />);

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(4);
  });

  it('applies correct CSS classes for responsive design', () => {
    render(<AboutStats />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-md:gap-16', 'max-sm:gap-10');
  });
});

describe('StatItem Component', () => {
  const mockProps = {
    value: '35%',
    description: 'Test description'
  };

  it('renders value and description correctly', () => {
    render(<StatItem {...mockProps} />);

    expect(screen.getByText('35%')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('has correct semantic structure', () => {
    render(<StatItem {...mockProps} />);

    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();

    const description = screen.getByText('Test description');
    expect(description.tagName).toBe('P');
  });

  it('applies correct styling classes', () => {
    render(<StatItem {...mockProps} />);

    const value = screen.getByText('35%');
    expect(value).toHaveClass('text-6xl', 'font-bold', 'text-zinc-200');

    const description = screen.getByText('Test description');
    expect(description).toHaveClass('text-slate-500', 'text-center');
  });

  it('handles responsive classes correctly', () => {
    render(<StatItem {...mockProps} />);

    const article = screen.getByRole('article');
    expect(article).toHaveClass('max-sm:items-center', 'max-sm:w-full');
  });
});

describe('StatDivider Component', () => {
  it('renders divider element', () => {
    const { container } = render(<StatDivider />);
    const divider = container.firstChild;

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('bg-white', 'bg-opacity-10');
  });

  it('has correct responsive styling', () => {
    const { container } = render(<StatDivider />);
    const divider = container.firstChild;

    expect(divider).toHaveClass('h-[120px]', 'w-[1.5px]');
    expect(divider).toHaveClass('max-md:h-[100px]');
    expect(divider).toHaveClass('max-sm:w-full', 'max-sm:h-[1.5px]');
  });
});
