import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  it('renders with provided src and alt', () => {
    const testSrc = 'https://example.com/image.jpg';
    const testAlt = 'Test image description';

    render(<HeroImage src={testSrc} alt={testAlt} />);

    const image = screen.getByAltText(testAlt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', testSrc);
  });

  it('applies correct responsive styling classes', () => {
    render(<HeroImage src="test.jpg" alt="Test" />);

    const image = screen.getByAltText('Test');
    expect(image).toHaveClass(
      'h-[613px]',
      'w-[498px]',
      'max-md:w-full',
      'max-md:h-auto',
      'max-md:max-w-[498px]'
    );
  });

  it('has proper image attributes', () => {
    const src = 'https://example.com/hero.png';
    const alt = 'Hero image';

    render(<HeroImage src={src} alt={alt} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', src);
    expect(image).toHaveAttribute('alt', alt);
  });
});
