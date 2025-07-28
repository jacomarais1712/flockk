import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroContent } from './HeroContent';

describe('HeroContent', () => {
  const defaultProps = {
    tagline: 'Test Tagline',
    heading: 'Test Heading',
    description: 'Test description',
    primaryButtonText: 'Primary',
    secondaryButtonText: 'Secondary'
  };

  it('renders all content elements', () => {
    render(<HeroContent {...defaultProps} />);

    expect(screen.getByText('Test Tagline')).toBeInTheDocument();
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('calls button click handlers', () => {
    const onPrimaryClick = vi.fn();
    const onSecondaryClick = vi.fn();

    render(
      <HeroContent
        {...defaultProps}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
    );

    fireEvent.click(screen.getByText('Primary'));
    expect(onPrimaryClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Secondary'));
    expect(onSecondaryClick).toHaveBeenCalledTimes(1);
  });

  it('uses h1 for heading element', () => {
    render(<HeroContent {...defaultProps} />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('uses paragraph for description', () => {
    render(<HeroContent {...defaultProps} />);

    const description = screen.getByText('Test description');
    expect(description.tagName).toBe('P');
  });

  it('applies correct responsive classes', () => {
    render(<HeroContent {...defaultProps} />);

    const container = screen.getByText('Test Heading').closest('div');
    expect(container).toHaveClass('max-sm:gap-6');
  });
});
