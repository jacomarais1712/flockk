import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavigationLinks } from './NavigationLinks';

describe('NavigationLinks', () => {
  it('renders navigation component', () => {
    render(<NavigationLinks />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('displays all navigation links', () => {
    render(<NavigationLinks />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
  });

  it('has dropdown arrow for Case Studies', () => {
    const { container } = render(<NavigationLinks />);

    const dropdownArrow = container.querySelector('svg');
    expect(dropdownArrow).toBeInTheDocument();
  });

  it('has correct responsive classes', () => {
    render(<NavigationLinks />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('flex', 'gap-8', 'items-center', 'max-md:flex-wrap', 'max-md:gap-6', 'max-md:justify-center', 'max-sm:hidden');
  });

  it('has correct text styling for links', () => {
    render(<NavigationLinks />);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveClass('text-base', 'font-bold', 'tracking-wide', 'leading-6', 'text-zinc-200');
  });
});
