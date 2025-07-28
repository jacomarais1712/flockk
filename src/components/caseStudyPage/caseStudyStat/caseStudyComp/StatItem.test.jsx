import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatItem } from './StatItem';

describe('StatItem', () => {
  it('renders the value and description correctly', () => {
    const testValue = "88%";
    const testDescription = "Revenue growth in 18 months";

    render(<StatItem value={testValue} description={testDescription} />);

    expect(screen.getByText(testValue)).toBeInTheDocument();
    expect(screen.getByText(testDescription)).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const testValue = "10x";
    const testDescription = "Return on ad spend achieved";

    render(<StatItem value={testValue} description={testDescription} />);

    const valueElement = screen.getByText(testValue);
    const descriptionElement = screen.getByText(testDescription);

    expect(valueElement).toHaveClass('text-7xl', 'font-bold', 'text-zinc-200');
    expect(descriptionElement).toHaveClass('text-xl', 'text-slate-500');
  });

  it('renders with proper semantic structure', () => {
    render(<StatItem value="€1,800" description="Monthly ad spend scaled from €10K" />);

    const container = screen.getByText("€1,800").closest('div');
    const description = screen.getByText("Monthly ad spend scaled from €10K");

    expect(container).toHaveClass('flex', 'flex-col', 'gap-2');
    expect(description.tagName).toBe('P');
  });
});
