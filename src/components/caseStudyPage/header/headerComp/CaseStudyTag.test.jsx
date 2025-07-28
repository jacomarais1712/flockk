import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CaseStudyTag from './CaseStudyTag';

describe('CaseStudyTag', () => {
  it('renders the case study text correctly', () => {
    render(<CaseStudyTag />);

    const tagText = screen.getByText('Case Study');
    expect(tagText).toBeInTheDocument();
    expect(tagText).toHaveTextContent('Case Study');
  });

  it('applies correct styling classes', () => {
    render(<CaseStudyTag />);

    const tagText = screen.getByText('Case Study');
    expect(tagText).toHaveClass('text-emerald-400');
    expect(tagText).toHaveClass('uppercase');
    expect(tagText).toHaveClass('font-bold');
    expect(tagText).toHaveClass('text-xs');
  });

  it('has correct container styling', () => {
    render(<CaseStudyTag />);

    const container = screen.getByText('Case Study').parentElement;
    expect(container).toHaveClass('bg-zinc-900');
    expect(container).toHaveClass('rounded');
    expect(container).toHaveClass('px-4');
    expect(container).toHaveClass('py-1.5');
  });
});
