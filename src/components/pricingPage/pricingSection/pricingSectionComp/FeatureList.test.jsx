import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeatureList } from './FeatureList';

describe('FeatureList', () => {
  const mockFeatures = [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ];

  it('renders all features', () => {
    render(<FeatureList features={mockFeatures} />);

    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Feature 3')).toBeInTheDocument();
  });

  it('applies default text color when not specified', () => {
    render(<FeatureList features={mockFeatures} />);

    const container = screen.getByText('Feature 1').closest('div').parentElement;
    expect(container).toHaveClass('text-gray-400');
  });

  it('applies custom text color when specified', () => {
    render(<FeatureList features={mockFeatures} textColor="text-neutral-300" />);

    const container = screen.getByText('Feature 1').closest('div').parentElement;
    expect(container).toHaveClass('text-neutral-300');
  });

  it('renders check icons for each feature', () => {
    render(<FeatureList features={mockFeatures} />);

    const icons = screen.getAllByRole('img');
    expect(icons).toHaveLength(3);
    icons.forEach(icon => {
      expect(icon).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/3ed43b7bcc02c1661428660929091d7a9d31942b?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c');
    });
  });
});
