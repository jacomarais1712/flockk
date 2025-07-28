import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrustedBrands from './TrustedBrands';
import Logo from './Logo';

describe('TrustedBrands', () => {
  it('renders the main heading text', () => {
    render(<TrustedBrands />);
    expect(screen.getByText('Trusted by top brands across various industries')).toBeInTheDocument();
  });

  it('renders all 6 company logos', () => {
    render(<TrustedBrands />);
    const logos = screen.getAllByRole('img');
    expect(logos).toHaveLength(6);
  });

  it('has proper semantic structure with section and header', () => {
    const { container } = render(<TrustedBrands />);
    const section = container.querySelector('section');
    const header = container.querySelector('header');

    expect(section).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });

  it('applies correct responsive classes', () => {
    const { container } = render(<TrustedBrands />);
    const section = container.querySelector('section');

    expect(section).toHaveClass('max-md:flex-col');
    expect(section).toHaveClass('max-sm:gap-6');
    expect(section).toHaveClass('max-md:px-10');
  });

  it('renders logos with proper spacing and layout', () => {
    const { container } = render(<TrustedBrands />);
    const logoContainer = container.querySelector('div:last-child');

    expect(logoContainer).toHaveClass('flex');
    expect(logoContainer).toHaveClass('justify-between');
    expect(logoContainer).toHaveClass('items-center');
  });

  it('has proper background and styling', () => {
    const { container } = render(<TrustedBrands />);
    const section = container.querySelector('section');

    expect(section).toHaveClass('bg-white');
    expect(section).toHaveClass('px-16');
    expect(section).toHaveClass('py-12');
  });
});

describe('Logo', () => {
  const mockSvgContent = '<svg><path d="test"/></svg>';
  const mockAlt = 'Test Company Logo';

  it('renders with provided SVG content', () => {
    const { container } = render(<Logo svgContent={mockSvgContent} alt={mockAlt} />);
    const logoDiv = container.querySelector('div');

    expect(logoDiv).toBeInTheDocument();
    expect(logoDiv.innerHTML).toBe(mockSvgContent);
  });

  it('has correct styling and dimensions', () => {
    const { container } = render(<Logo svgContent={mockSvgContent} alt={mockAlt} />);
    const logoDiv = container.querySelector('div');

    expect(logoDiv).toHaveClass('logo');
    expect(logoDiv).toHaveStyle({
      width: '120px',
      height: '48px',
      aspectRatio: '5/2',
      position: 'relative',
      flexShrink: '0'
    });
  });

  it('has proper accessibility attributes', () => {
    const { container } = render(<Logo svgContent={mockSvgContent} alt={mockAlt} />);
    const logoDiv = container.querySelector('div');

    expect(logoDiv).toHaveAttribute('role', 'img');
    expect(logoDiv).toHaveAttribute('aria-label', mockAlt);
  });

  it('uses default alt text when not provided', () => {
    const { container } = render(<Logo svgContent={mockSvgContent} />);
    const logoDiv = container.querySelector('div');

    expect(logoDiv).toHaveAttribute('aria-label', 'Company logo');
  });

  it('handles empty SVG content gracefully', () => {
    const { container } = render(<Logo svgContent="" alt={mockAlt} />);
    const logoDiv = container.querySelector('div');

    expect(logoDiv).toBeInTheDocument();
    expect(logoDiv.innerHTML).toBe('');
  });
});

describe('TrustedBrands Integration', () => {
  it('renders all logos with unique content', () => {
    render(<TrustedBrands />);
    const logos = screen.getAllByRole('img');

    logos.forEach((logo, index) => {
      expect(logo).toHaveAttribute('aria-label', `Company Logo ${index + 1}`);
    });
  });

  it('maintains responsive behavior across breakpoints', () => {
    const { container } = render(<TrustedBrands />);
    const section = container.querySelector('section');
    const header = container.querySelector('header');
    const logoContainer = container.querySelector('div:last-child');

    // Desktop layout
    expect(section).toHaveClass('flex');
    expect(section).toHaveClass('gap-16');

    // Tablet layout
    expect(section).toHaveClass('max-md:flex-col');
    expect(section).toHaveClass('max-md:gap-10');
    expect(header).toHaveClass('max-md:text-center');

    // Mobile layout
    expect(section).toHaveClass('max-sm:gap-6');
    expect(logoContainer).toHaveClass('max-sm:flex-col');
    expect(logoContainer).toHaveClass('max-sm:gap-5');
  });

  it('has proper color scheme matching design', () => {
    const { container } = render(<TrustedBrands />);
    const header = container.querySelector('header');

    expect(header).toHaveClass('text-gray-400');
  });

  it('maintains proper spacing and typography', () => {
    const { container } = render(<TrustedBrands />);
    const header = container.querySelector('header');

    expect(header).toHaveClass('text-sm');
    expect(header).toHaveClass('tracking-wide');
    expect(header).toHaveClass('leading-6');
    expect(header).toHaveClass('max-sm:text-xs');
  });
});
