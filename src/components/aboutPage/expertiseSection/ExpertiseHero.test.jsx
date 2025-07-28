import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExpertiseHero } from './ExpertiseHero';

describe('ExpertiseHero', () => {
  it('renders with default props', () => {
    render(<ExpertiseHero />);

    expect(screen.getByText('Our Expertise')).toBeInTheDocument();
    expect(screen.getByText('Meet Francois: Your Paid Media Strategist')).toBeInTheDocument();
    expect(screen.getByText(/Francois brings over a decade/)).toBeInTheDocument();
    expect(screen.getByText('Book a Free Consultation')).toBeInTheDocument();
    expect(screen.getByText('See Our Work')).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    const customProps = {
      tagText: 'Custom Tag',
      heading: 'Custom Heading',
      description: 'Custom description text',
      primaryButtonText: 'Custom Primary',
      secondaryButtonText: 'Custom Secondary'
    };

    render(<ExpertiseHero {...customProps} />);

    expect(screen.getByText('Custom Tag')).toBeInTheDocument();
    expect(screen.getByText('Custom Heading')).toBeInTheDocument();
    expect(screen.getByText('Custom description text')).toBeInTheDocument();
    expect(screen.getByText('Custom Primary')).toBeInTheDocument();
    expect(screen.getByText('Custom Secondary')).toBeInTheDocument();
  });

  it('calls onPrimaryClick when primary button is clicked', () => {
    const mockPrimaryClick = vi.fn();
    render(<ExpertiseHero onPrimaryClick={mockPrimaryClick} />);

    const primaryButton = screen.getByText('Book a Free Consultation');
    fireEvent.click(primaryButton);

    expect(mockPrimaryClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSecondaryClick when secondary button is clicked', () => {
    const mockSecondaryClick = vi.fn();
    render(<ExpertiseHero onSecondaryClick={mockSecondaryClick} />);

    const secondaryButton = screen.getByText('See Our Work');
    fireEvent.click(secondaryButton);

    expect(mockSecondaryClick).toHaveBeenCalledTimes(1);
  });

  it('renders images with correct src attributes', () => {
    render(<ExpertiseHero />);

    const backgroundImage = document.querySelector('img[src="https://cdn.builder.io/api/v1/image/assets/TEMP/720e26d361f31bb430675205d912e933c1249bbb?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9"]');
    const heroImage = document.querySelector('img[src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3ca2438e1729b769060d7532f4d83ab7000c51?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9"]');

    expect(backgroundImage).toBeInTheDocument();
    expect(heroImage).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<ExpertiseHero />);

    const section = screen.getByRole('region');
    const heading = screen.getByRole('heading', { level: 1 });
    const buttons = screen.getAllByRole('button');

    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });

  it('applies correct CSS classes for responsive design', () => {
    render(<ExpertiseHero />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-md:px-5');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('max-md:text-4xl', 'max-md:leading-[53px]');
  });

  it('renders with custom background and hero images', () => {
    const customProps = {
      backgroundImage: 'custom-bg.jpg',
      heroImage: 'custom-hero.jpg'
    };

    render(<ExpertiseHero {...customProps} />);

    const backgroundImage = document.querySelector('img[src="custom-bg.jpg"]');
    const heroImage = document.querySelector('img[src="custom-hero.jpg"]');

    expect(backgroundImage).toBeInTheDocument();
    expect(heroImage).toBeInTheDocument();
  });
});
