import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ServicesSection } from './ServicesSection';

describe('ServicesSection', () => {
  it('renders the section header with correct tagline and heading', () => {
    render(<ServicesSection />);

    expect(screen.getByText('OUR Services')).toBeInTheDocument();
    expect(screen.getByText('How We Can Help You Grow')).toBeInTheDocument();
  });

  it('renders all four service cards', () => {
    render(<ServicesSection />);

    expect(screen.getByText('Google Ads Management')).toBeInTheDocument();
    expect(screen.getByText('Google Analytics & GA4 Implementation')).toBeInTheDocument();
    expect(screen.getByText('Tag Management & Tracking')).toBeInTheDocument();
    expect(screen.getByText('Custom Dashboards & Reporting')).toBeInTheDocument();
  });

  it('renders service descriptions correctly', () => {
    render(<ServicesSection />);

    expect(screen.getByText('Strategy, Setup, Optimisation & Growth')).toBeInTheDocument();
    expect(screen.getByText('Understand Your Users, Track What Matters')).toBeInTheDocument();
    expect(screen.getByText('Advanced Tracking Without Developer Delays')).toBeInTheDocument();
    expect(screen.getByText('Clear, Automated, Decision-Ready Dashboards')).toBeInTheDocument();
  });

  it('renders Learn More buttons for all services', () => {
    render(<ServicesSection />);

    const learnMoreButtons = screen.getAllByText('Learn More');
    expect(learnMoreButtons).toHaveLength(4);
  });

  it('uses semantic HTML elements', () => {
    render(<ServicesSection />);

    expect(screen.getByRole('banner')).toBeInTheDocument(); // header
    expect(screen.getAllByRole('article')).toHaveLength(4); // service cards
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4);
  });

  it('preserves URL strings exactly as provided', () => {
    render(<ServicesSection />);

    const images = screen.getAllByRole('img');
    const backgroundImages = images.filter(img => img.src.includes('https://cdn.builder.io/api/v1/image/assets/TEMP/fd2774bbb6f2377d775dc2b0f98372f530968b3c?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce'));
    const iconImages = images.filter(img =>
      img.src.includes('https://cdn.builder.io/api/v1/image/assets/TEMP/36b5d87ad4e662f6927d9e84abf3da802e4a1fc4?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce') ||
      img.src.includes('https://cdn.builder.io/api/v1/image/assets/TEMP/8233ac73556428b04cfd3d04e009022296a2c500?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce') ||
      img.src.includes('https://cdn.builder.io/api/v1/image/assets/TEMP/2d03a6a9f8b937ba044c425b19c81e736a26f009?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce') ||
      img.src.includes('https://cdn.builder.io/api/v1/image/assets/TEMP/334df0a2c59937773f22a69589382d49a05ce7c6?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce')
    );
    const buttonImages = images.filter(img =>
      img.src.includes('https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c1813981520cd36804b905f1bf902776d688b?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce') ||
      img.src.includes('https://cdn.builder.io/api/v1/image/assets/TEMP/1a8d4c654f7838a656766d79a718b31d34d3c614?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce')
    );

    expect(backgroundImages.length).toBeGreaterThan(0);
    expect(iconImages.length).toBeGreaterThan(0);
    expect(buttonImages.length).toBeGreaterThan(0);
  });

  it('applies correct CSS classes for responsive design', () => {
    const { container } = render(<ServicesSection />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('max-md:px-5', 'max-md:py-24');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('max-md:max-w-full', 'max-md:text-4xl');
  });
});
