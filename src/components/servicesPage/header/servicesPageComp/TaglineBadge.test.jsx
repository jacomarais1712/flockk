import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TaglineBadge } from './TaglineBadge';

describe('TaglineBadge', () => {
  it('renders the provided text', () => {
    render(<TaglineBadge text="SERVICES" />);
    expect(screen.getByText('SERVICES')).toBeInTheDocument();
  });

  it('renders custom text', () => {
    render(<TaglineBadge text="CUSTOM BADGE" />);
    expect(screen.getByText('CUSTOM BADGE')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(<TaglineBadge text="TEST" />);
    const badge = screen.getByText('TEST').parentElement;
    expect(badge).toHaveClass('bg-zinc-900', 'rounded', 'px-4', 'py-1.5');
  });

  it('displays text in uppercase styling', () => {
    render(<TaglineBadge text="test" />);
    const text = screen.getByText('test');
    expect(text).toHaveClass('uppercase', 'text-emerald-400');
  });
});
