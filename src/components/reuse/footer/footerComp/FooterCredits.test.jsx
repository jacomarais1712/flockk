import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FooterCredits } from './FooterCredits';

describe('FooterCredits', () => {
  it('renders footer credits section', () => {
    render(<FooterCredits />);

    const section = screen.getByRole('generic');
    expect(section).toBeInTheDocument();
  });

  it('displays copyright text', () => {
    render(<FooterCredits />);

    expect(screen.getByText('© 2025 Flockk. All rights reserved.')).toBeInTheDocument();
  });

  it('displays all policy links', () => {
    render(<FooterCredits />);

    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Use')).toBeInTheDocument();
    expect(screen.getByText('Cookie Policy')).toBeInTheDocument();
  });

  it('has correct link styling', () => {
    render(<FooterCredits />);

    const privacyLink = screen.getByText('Privacy Policy');
    expect(privacyLink).toHaveClass('text-sm', 'tracking-wide', 'leading-6', 'text-emerald-500', 'underline');
  });

  it('has divider element', () => {
    const { container } = render(<FooterCredits />);

    const divider = container.querySelector('.h-px');
    expect(divider).toHaveClass('w-full', 'h-px', 'bg-neutral-800');
  });

  it('has correct responsive classes', () => {
    const { container } = render(<FooterCredits />);

    const creditsRow = container.querySelector('.flex.gap-8');
    expect(creditsRow).toHaveClass('flex', 'gap-8', 'items-start', 'max-md:flex-wrap', 'max-md:gap-4', 'max-md:justify-center', 'max-sm:flex-col', 'max-sm:gap-3', 'max-sm:items-center', 'max-sm:text-center');
  });
});
