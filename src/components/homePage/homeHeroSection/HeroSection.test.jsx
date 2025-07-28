import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('renders with default props', () => {
    render(<HeroSection />);

    expect(screen.getByText('Why Partner With Flockk?')).toBeInTheDocument();
    expect(screen.getByText('Results are a given.')).toBeInTheDocument();
    expect(screen.getByText('Success is in the details.')).toBeInTheDocument();
    expect(screen.getByText('Get in Contact')).toBeInTheDocument();
    expect(screen.getByText('See Pricing & Packages')).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    const customProps = {
      tagline: 'Custom Tagline',
      heading: 'Custom Heading',
      description: 'Custom description text',
      primaryButtonText: 'Custom Primary',
      secondaryButtonText: 'Custom Secondary'
    };

    render(<HeroSection {...customProps} />);

    expect(screen.getByText('Custom Tagline')).toBeInTheDocument();
    expect(screen.getByText('Custom Heading')).toBeInTheDocument();
    expect(screen.getByText('Custom description text')).toBeInTheDocument();
    expect(screen.getByText('Custom Primary')).toBeInTheDocument();
    expect(screen.getByText('Custom Secondary')).toBeInTheDocument();
  });

  it('handles button clicks', () => {
    const onPrimaryClick = vi.fn();
    const onSecondaryClick = vi.fn();

    render(
      <HeroSection
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
    );

    fireEvent.click(screen.getByText('Get in Contact'));
    expect(onPrimaryClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('See Pricing & Packages'));
    expect(onSecondaryClick).toHaveBeenCalledTimes(1);
  });

  it('renders image with correct attributes', () => {
    const customImageUrl = 'https://example.com/image.jpg';
    const customImageAlt = 'Custom alt text';

    render(
      <HeroSection
        imageUrl={customImageUrl}
        imageAlt={customImageAlt}
      />
    );

    const image = screen.getByAltText(customImageAlt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', customImageUrl);
  });

  it('formats heading with line breaks', () => {
    const multiLineHeading = 'Line 1\nLine 2\nLine 3';

    render(<HeroSection heading={multiLineHeading} />);

    expect(screen.getByText('Line 1')).toBeInTheDocument();
    expect(screen.getByText('Line 2')).toBeInTheDocument();
    expect(screen.getByText('Line 3')).toBeInTheDocument();
  });

  it('formats description with line breaks', () => {
    const multiLineDescription = 'Description line 1\nDescription line 2';

    render(<HeroSection description={multiLineDescription} />);

    expect(screen.getByText('Description line 1')).toBeInTheDocument();
    expect(screen.getByText('Description line 2')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<HeroSection />);

    const section = screen.getByRole('banner');
    expect(section.tagName).toBe('SECTION');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('applies correct CSS classes for responsive design', () => {
    render(<HeroSection />);

    const section = screen.getByRole('banner');
    expect(section).toHaveClass('max-md:gap-16', 'max-sm:gap-10');
  });
});
