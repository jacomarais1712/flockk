import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PricingCard } from './PricingCard';

describe('PricingCard', () => {
  const mockProps = {
    backgroundImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c691e3a6ea73785e22f67053a021a06a59f08d35?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/047ef1f6f4a408c460f72cd032ca0d925a252a1e?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c',
    title: 'Test Plan',
    description: 'Test description',
    subtitle: 'Test subtitle',
    bestForItems: ['Test item 1', 'Test item 2'],
    price: '€100',
    period: '/month',
    annualPrice: '$1,000 billed annually',
    savings: 'Save 15%',
    features: ['Feature 1', 'Feature 2'],
    featuresTextColor: 'text-gray-400'
  };

  it('renders the card title', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.getByText('Test Plan')).toBeInTheDocument();
  });

  it('displays pricing information', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.getByText('€100')).toBeInTheDocument();
    expect(screen.getByText('/month')).toBeInTheDocument();
    expect(screen.getByText('$1,000 billed annually')).toBeInTheDocument();
    expect(screen.getByText('Save 15%')).toBeInTheDocument();
  });

  it('renders best for items', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.getByText('Test item 1')).toBeInTheDocument();
    expect(screen.getByText('Test item 2')).toBeInTheDocument();
  });

  it('displays features list', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    const propsWithBadge = { ...mockProps, badge: 'Popular' };
    render(<PricingCard {...propsWithBadge} />);

    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('renders Get Started button', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});
