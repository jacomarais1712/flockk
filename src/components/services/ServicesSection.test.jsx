import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServicesSection from './ServicesSection';

// Mock the child components
vi.mock('./BackgroundBlur', () => ({
  default: () => <div data-testid="background-blur">Background Blur</div>
}));

vi.mock('./SectionHeader', () => ({
  default: ({ tagline, heading, description }) => (
    <div data-testid="section-header">
      <span>{tagline}</span>
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  )
}));

vi.mock('./ServiceCard', () => ({
  default: ({ title, description, onLearnMore }) => (
    <div data-testid="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onLearnMore}>Learn More</button>
    </div>
  )
}));

describe('ServicesSection', () => {
  it('renders without crashing', () => {
    render(<ServicesSection />);
    expect(screen.getByTestId('background-blur')).toBeInTheDocument();
  });

  it('renders the section header with correct props', () => {
    render(<ServicesSection />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('What We Do Best')).toBeInTheDocument();
    expect(screen.getByText('We help small to medium businesses succeed with:')).toBeInTheDocument();
  });

  it('renders all four service cards', () => {
    render(<ServicesSection />);
    const serviceCards = screen.getAllByTestId('service-card');
    expect(serviceCards).toHaveLength(4);
  });

  it('renders service cards with correct titles', () => {
    render(<ServicesSection />);
    expect(screen.getByText('Google Ads Management')).toBeInTheDocument();
    expect(screen.getByText('Google Analytics & GA4 Implementation')).toBeInTheDocument();
    expect(screen.getByText('Tag Management & Tracking')).toBeInTheDocument();
    expect(screen.getByText('Custom Dashboards & Reporting')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    const { container } = render(<ServicesSection />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('flex', 'relative', 'flex-col');
  });

  it('applies responsive classes correctly', () => {
    const { container } = render(<ServicesSection />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('max-md:gap-16', 'max-sm:gap-10');
  });
});
