import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders footer element', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('has correct background and layout classes', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('box-border', 'flex', 'flex-col', 'gap-20', 'items-center', 'px-16', 'py-20', 'w-full', 'bg-neutral-950');
  });

  it('has correct responsive classes', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('max-md:gap-16', 'max-md:px-8', 'max-md:py-16', 'max-sm:gap-10', 'max-sm:px-4', 'max-sm:py-10');
  });

  it('renders all child components', () => {
    const { container } = render(<Footer />);

    // Check for logo SVGs
    const svgElements = container.querySelectorAll('svg');
    expect(svgElements.length).toBeGreaterThan(0);

    // Check for navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();

    // Check for copyright
    expect(screen.getByText('© 2025 Flockk. All rights reserved.')).toBeInTheDocument();
  });

  it('has correct max-width constraint', () => {
    const { container } = render(<Footer />);

    const contentContainer = container.querySelector('.max-w-\\[1312px\\]');
    expect(contentContainer).toBeInTheDocument();
  });

  it('contains navigation element', () => {
    render(<Footer />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
