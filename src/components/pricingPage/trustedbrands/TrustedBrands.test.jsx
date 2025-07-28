import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrustedBrands from './TrustedBrands';

describe('TrustedBrands', () => {
  it('renders the heading text correctly', () => {
    render(<TrustedBrands />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Trusted by top brands across various industries');
  });

  it('applies correct CSS classes to the heading', () => {
    render(<TrustedBrands />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-base', 'tracking-wide', 'text-gray-400');
  });

  it('renders all brand logos', () => {
    render(<TrustedBrands />);

    const logos = screen.getAllByRole('img');
    expect(logos).toHaveLength(7);
  });

  it('renders logos with correct src attributes', () => {
    render(<TrustedBrands />);

    const logos = screen.getAllByRole('img');
    const expectedSrcs = ['https://cdn.builder.io/api/v1/image/assets/TEMP/722e2d0956c3940d27700ae92cc05d054eeb0f53?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64', 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e98d826cb613c9a72892f79e1d171c19a479c2?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64', 'https://cdn.builder.io/api/v1/image/assets/TEMP/dc24ad6b541374c7cd46147f6e057a8683b5e4c6?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64', 'https://cdn.builder.io/api/v1/image/assets/TEMP/14c43410e586d3ed1ad6c185f612fe4d3a734c19?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64', 'https://cdn.builder.io/api/v1/image/assets/TEMP/dc24ad6b541374c7cd46147f6e057a8683b5e4c6?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64', 'https://cdn.builder.io/api/v1/image/assets/TEMP/14c43410e586d3ed1ad6c185f612fe4d3a734c19?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64', 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a8fefbaeca086f869658217d18af279aa5e5403?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64'];

    logos.forEach((logo, index) => {
      expect(logo).toHaveAttribute('src', expectedSrcs[index]);
    });
  });

  it('renders logos with appropriate alt text', () => {
    render(<TrustedBrands />);

    const logos = screen.getAllByRole('img');
    logos.forEach((logo, index) => {
      expect(logo).toHaveAttribute('alt', `Brand ${index + 1} logo`);
    });
  });

  it('applies correct layout classes to the main container', () => {
    render(<TrustedBrands />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('px-14', 'max-md:pl-5');
  });

  it('applies correct layout classes to the content wrapper', () => {
    render(<TrustedBrands />);

    const contentWrapper = screen.getByRole('region').firstChild;
    expect(contentWrapper).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'py-12',
      'w-full',
      'max-md:max-w-full'
    );
  });

  it('applies correct layout classes to the logos container', () => {
    render(<TrustedBrands />);

    const logosContainer = screen.getAllByRole('img')[0].parentElement;
    expect(logosContainer).toHaveClass(
      'flex',
      'flex-wrap',
      'gap-6',
      'justify-center',
      'items-center',
      'mt-8',
      'max-md:max-w-full'
    );
  });

  it('uses semantic HTML structure', () => {
    render(<TrustedBrands />);

    // Check that it uses section element
    const section = screen.getByRole('region');
    expect(section.tagName).toBe('SECTION');

    // Check that it uses h2 element for heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.tagName).toBe('H2');
  });
});
