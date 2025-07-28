import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PricingSection from './Pricing';

describe('PricingSection', () => {
  it('renders all three pricing tiers', () => {
    render(<Pricing />);

    expect(screen.getByText('Launch')).toBeInTheDocument();
    expect(screen.getByText('Scale')).toBeInTheDocument();
    expect(screen.getByText('Dominate')).toBeInTheDocument();
  });

  it('displays pricing information correctly', () => {
    render(<PricingSection />);

    expect(screen.getByText('€450')).toBeInTheDocument();
    expect(screen.getByText('€950')).toBeInTheDocument();
    expect(screen.getByText('€1,800')).toBeInTheDocument();
  });

  it('shows the Most Popular badge on Scale tier', () => {
    render(<PricingSection />);

    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });

  it('renders all Get Started buttons', () => {
    render(<PricingSection />);

    const buttons = screen.getAllByText('Get Started');
    expect(buttons).toHaveLength(3);
  });

  it('displays feature lists for each tier', () => {
    render(<PricingSection />);

    expect(screen.getByText('Google Ads or Facebook Ads')).toBeInTheDocument();
    expect(screen.getByText('Google + Facebook Ads')).toBeInTheDocument();
    expect(screen.getByText('Unlimited Google + Facebook campaigns')).toBeInTheDocument();
  });
});
