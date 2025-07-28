import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GoogleAdsSection from './GoogleAdsSection';

describe('GoogleAdsSection', () => {
  it('renders the main heading', () => {
    render(<GoogleAdsSection />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Google Ads Management');
  });

  it('renders the subtitle', () => {
    render(<GoogleAdsSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Strategy, Setup, Optimisation & Growth');
  });

  it('renders the description paragraph', () => {
    render(<GoogleAdsSection />);
    expect(screen.getByText(/We plan, build, and manage high-performing Google Ads campaigns/)).toBeInTheDocument();
  });

  it('renders the service list heading', () => {
    render(<GoogleAdsSection />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('What we can help you with:');
  });

  it('renders all service list items', () => {
    render(<GoogleAdsSection />);
    const serviceItems = [
      'Full campaign setup & structuring',
      'Keyword and audience targeting strategies',
      'Performance Max & Dynamic Search Ads',
      'Ongoing optimisation to reduce CPA and increase ROAS',
      'A/B testing of ad creatives, extensions, and landing pages',
      'Budget pacing and bid strategy management'
    ];

    serviceItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders the main image with correct alt text', () => {
    render(<GoogleAdsSection />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Frame 1618872788');
    expect(image).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/3edb2f3a7bd9e1972f1a56964a55753615d47c38?width=650');
  });

  it('renders check icons for each service item', () => {
    render(<GoogleAdsSection />);
    const checkIcons = screen.getAllByRole('img', { hidden: true });
    expect(checkIcons).toHaveLength(6);
  });

  it('has proper semantic structure', () => {
    render(<GoogleAdsSection />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(6);
  });
});
