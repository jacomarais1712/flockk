import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GoogleAnalyticsSection } from './GoogleAnalyticsSection';

describe('GoogleAnalyticsSection', () => {
  it('renders the main heading', () => {
    render(<GoogleAnalyticsSection />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Google Analytics & GA4 Implementation');
  });

  it('renders the subtitle', () => {
    render(<GoogleAnalyticsSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Understand Your Users, Track What Matters');
  });

  it('renders the description paragraph', () => {
    render(<GoogleAnalyticsSection />);
    expect(screen.getByText(/Accurate tracking is the foundation/)).toBeInTheDocument();
  });

  it('renders the "What we offer:" section', () => {
    render(<GoogleAnalyticsSection />);
    expect(screen.getByText('What we offer:')).toBeInTheDocument();
  });

  it('renders all feature list items', () => {
    render(<GoogleAnalyticsSection />);
    expect(screen.getByText('Full GA4 setup or audit of your existing setup')).toBeInTheDocument();
    expect(screen.getByText('Event tracking configuration')).toBeInTheDocument();
    expect(screen.getByText('Enhanced measurement setup and custom dimensions')).toBeInTheDocument();
    expect(screen.getByText('E-commerce tracking setup')).toBeInTheDocument();
    expect(screen.getByText('Linking GA4 with Google Ads for audience and conversion insights')).toBeInTheDocument();
    expect(screen.getByText('Training & explanation of key reports')).toBeInTheDocument();
  });

  it('renders the analytics dashboard image', () => {
    render(<GoogleAnalyticsSection />);
    expect(screen.getByAltText('Analytics Dashboard')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<GoogleAnalyticsSection />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(6);
  });
});
