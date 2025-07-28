import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrandLogo } from './BrandLogo';

describe('BrandLogo', () => {
  it('renders with provided src attribute', () => {
    const testSrc = 'URL_TEST';
    render(<BrandLogo src={testSrc} />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', testSrc);
  });

  it('renders with provided alt text', () => {
    const testAlt = 'Test brand logo';
    render(<BrandLogo src="URL_TEST" alt={testAlt} />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', testAlt);
  });

  it('renders with default alt text when not provided', () => {
    render(<BrandLogo src="URL_TEST" />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'Brand logo');
  });

  it('applies correct CSS classes', () => {
    render(<BrandLogo src="URL_TEST" />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveClass(
      'object-contain',
      'shrink-0',
      'self-stretch',
      'my-auto',
      'aspect-[3.57]',
      'w-[200px]'
    );
  });

  it('maintains aspect ratio and width styling', () => {
    render(<BrandLogo src="URL_TEST" />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveClass('aspect-[3.57]');
    expect(logo).toHaveClass('w-[200px]');
  });

  it('applies object-contain for proper image scaling', () => {
    render(<BrandLogo src="URL_TEST" />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveClass('object-contain');
  });
});
