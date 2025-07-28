import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AnalyticsContent } from './AnalyticsContent';

describe('AnalyticsContent', () => {
  it('renders the main heading with correct styling', () => {
    render(<AnalyticsContent />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Google Analytics & GA4 Implementation');
    expect(heading).toHaveClass('text-emerald-50');
  });

  it('renders the subtitle with correct styling', () => {
    render(<AnalyticsContent />);
    const subtitle = screen.getByRole('heading', { level: 2 });
    expect(subtitle).toHaveTextContent('Understand Your Users, Track What Matters');
    expect(subtitle).toHaveClass('text-zinc-200');
  });

  it('renders the description paragraph', () => {
    render(<AnalyticsContent />);
    const description = screen.getByText(/Accurate tracking is the foundation/);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-gray-400');
  });

  it('includes the FeatureList component', () => {
    render(<AnalyticsContent />);
    expect(screen.getByText('What we offer:')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('has responsive classes for mobile', () => {
    render(<AnalyticsContent />);
    const container = screen.getByRole('heading', { level: 1 }).closest('div');
    expect(container).toHaveClass('max-md:items-center', 'max-md:text-center');
  });
});
