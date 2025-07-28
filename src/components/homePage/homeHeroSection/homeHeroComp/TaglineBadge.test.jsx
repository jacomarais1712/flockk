import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TaglineBadge } from './TaglineBadge';

describe('TaglineBadge', () => {
  it('renders with provided text', () => {
    const testText = 'Test Tagline';
    render(<TaglineBadge text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const testText = 'Styled Tagline';
    render(<TaglineBadge text={testText} />);

    const textElement = screen.getByText(testText);
    expect(textElement).toHaveClass(
      'text-xs',
      'font-bold',
      'tracking-wide',
      'text-emerald-400',
      'uppercase'
    );
  });

  it('has proper container styling', () => {
    render(<TaglineBadge text="Test" />);

    const container = screen.getByText('Test').parentElement;
    expect(container).toHaveClass(
      'bg-zinc-900',
      'rounded',
      'px-4',
      'py-1.5',
      'h-8'
    );
  });
});
