import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroHeading } from './HeroHeading';

describe('HeroHeading', () => {
  it('renders both primary and accent text', () => {
    render(<HeroHeading primaryText="Primary Text" accentText="Accent Text" />);
    expect(screen.getByText('Primary Text')).toBeInTheDocument();
    expect(screen.getByText('Accent Text')).toBeInTheDocument();
  });

  it('applies correct color classes', () => {
    render(<HeroHeading primaryText="Primary" accentText="Accent" />);
    expect(screen.getByText('Primary')).toHaveClass('text-zinc-200');
    expect(screen.getByText('Accent')).toHaveClass('text-emerald-400');
  });

  it('uses h1 semantic element', () => {
    render(<HeroHeading primaryText="Test" accentText="Heading" />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('applies responsive typography classes', () => {
    render(<HeroHeading primaryText="Test" accentText="Heading" />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('text-6xl', 'max-md:text-5xl', 'max-sm:text-3xl');
  });
});
