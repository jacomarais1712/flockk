import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FooterBannerHeading from './FooterBannerHeading';

describe('FooterBannerHeading', () => {
  const defaultProps = {
    heading: 'Test Heading',
    description: 'Test description text'
  };

  it('renders heading with correct text', () => {
    render(<FooterBannerHeading {...defaultProps} />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('renders description with correct text', () => {
    render(<FooterBannerHeading {...defaultProps} />);

    const description = screen.getByText('Test description text');
    expect(description).toBeInTheDocument();
  });

  it('uses semantic HTML elements', () => {
    render(<FooterBannerHeading {...defaultProps} />);

    // Should use h1 for heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.tagName).toBe('H1');

    // Should use p for description
    const description = screen.getByText('Test description text');
    expect(description.tagName).toBe('P');
  });

  it('has correct CSS classes for styling', () => {
    render(<FooterBannerHeading {...defaultProps} />);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass(
      'text-5xl',
      'font-bold',
      'tracking-tight',
      'leading-tight',
      'text-zinc-200'
    );

    const description = screen.getByText('Test description text');
    expect(description).toHaveClass(
      'mt-5',
      'text-xl',
      'tracking-wide',
      'leading-8',
      'text-neutral-300'
    );
  });

  it('has responsive classes', () => {
    render(<FooterBannerHeading {...defaultProps} />);

    const container = screen.getByRole('heading').parentElement;
    expect(container).toHaveClass('max-md:max-w-full');

    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('max-md:max-w-full', 'max-md:text-4xl');

    const description = screen.getByText('Test description text');
    expect(description).toHaveClass('max-md:max-w-full');
  });

  it('handles long text content properly', () => {
    const longProps = {
      heading: 'This is a very long heading that should wrap properly on smaller screens',
      description: 'This is a very long description that contains multiple sentences and should wrap properly across different screen sizes while maintaining readability and proper spacing.'
    };

    render(<FooterBannerHeading {...longProps} />);

    const heading = screen.getByRole('heading');
    const description = screen.getByText(longProps.description);

    expect(heading).toHaveTextContent(longProps.heading);
    expect(description).toHaveTextContent(longProps.description);
  });

  it('maintains proper text hierarchy', () => {
    render(<FooterBannerHeading {...defaultProps} />);

    const heading = screen.getByRole('heading', { level: 1 });
    const description = screen.getByText('Test description text');

    // Heading should come before description in DOM order
    expect(heading.compareDocumentPosition(description)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });
});
