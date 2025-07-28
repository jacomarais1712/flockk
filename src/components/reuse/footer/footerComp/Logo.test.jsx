import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders the logo component', () => {
    render(<Logo />);

    const logoContainer = screen.getByRole('generic');
    expect(logoContainer).toBeInTheDocument();
  });

  it('contains SVG elements for logo icon and text', () => {
    const { container } = render(<Logo />);

    const svgElements = container.querySelectorAll('svg');
    expect(svgElements).toHaveLength(2);
  });

  it('has correct responsive classes', () => {
    const { container } = render(<Logo />);

    const logoWrapper = container.firstChild;
    expect(logoWrapper).toHaveClass('flex', 'flex-col', 'gap-6', 'items-start', 'flex-[1_0_0]', 'max-md:self-center');
  });

  it('has correct dimensions for logo container', () => {
    const { container } = render(<Logo />);

    const logoContainer = container.querySelector('.relative');
    expect(logoContainer).toHaveClass('relative', 'h-9', 'w-[137px]');
  });
});
