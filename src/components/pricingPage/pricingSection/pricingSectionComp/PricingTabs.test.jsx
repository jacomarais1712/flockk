import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PricingTabs } from './PricingTabs';

describe('PricingTabs', () => {
  it('renders both Monthly and Yearly tabs', () => {
    render(<PricingTabs />);

    expect(screen.getByText('Monthly')).toBeInTheDocument();
    expect(screen.getByText('Yearly')).toBeInTheDocument();
  });

  it('has Yearly tab active by default', () => {
    render(<PricingTabs />);

    const yearlyButton = screen.getByText('Yearly').closest('button');
    const monthlyButton = screen.getByText('Monthly').closest('button');

    expect(yearlyButton).toHaveClass('bg-zinc-200', 'text-zinc-900');
    expect(monthlyButton).toHaveClass('text-zinc-200');
    expect(monthlyButton).not.toHaveClass('bg-zinc-200');
  });

  it('switches active tab when clicked', () => {
    render(<PricingTabs />);

    const monthlyButton = screen.getByText('Monthly').closest('button');
    const yearlyButton = screen.getByText('Yearly').closest('button');

    fireEvent.click(monthlyButton);

    expect(monthlyButton).toHaveClass('bg-zinc-200', 'text-zinc-900');
    expect(yearlyButton).toHaveClass('text-zinc-200');
    expect(yearlyButton).not.toHaveClass('bg-zinc-200');
  });
});
