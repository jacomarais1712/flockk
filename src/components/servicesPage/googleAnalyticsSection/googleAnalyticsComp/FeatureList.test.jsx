import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeatureList } from './FeatureList';

describe('FeatureList', () => {
  it('renders the "What we offer:" heading', () => {
    render(<FeatureList />);
    expect(screen.getByText('What we offer:')).toBeInTheDocument();
  });

  it('renders all 6 feature items', () => {
    render(<FeatureList />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(6);
  });

  it('renders checkmark icons for each feature', () => {
    render(<FeatureList />);
    const checkmarks = screen.getAllByRole('img', { hidden: true });
    expect(checkmarks).toHaveLength(6);
  });

  it('renders specific feature text', () => {
    render(<FeatureList />);
    expect(screen.getByText('Full GA4 setup or audit of your existing setup')).toBeInTheDocument();
    expect(screen.getByText('Event tracking configuration')).toBeInTheDocument();
    expect(screen.getByText('Enhanced measurement setup and custom dimensions')).toBeInTheDocument();
    expect(screen.getByText('E-commerce tracking setup')).toBeInTheDocument();
    expect(screen.getByText('Linking GA4 with Google Ads for audience and conversion insights')).toBeInTheDocument();
    expect(screen.getByText('Training & explanation of key reports')).toBeInTheDocument();
  });

  it('has proper list structure', () => {
    render(<FeatureList />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('flex', 'flex-col', 'gap-4');
  });

  it('applies correct text styling', () => {
    render(<FeatureList />);
    const heading = screen.getByText('What we offer:');
    expect(heading).toHaveClass('text-zinc-200', 'font-bold');

    const firstFeature = screen.getByText('Full GA4 setup or audit of your existing setup');
    expect(firstFeature).toHaveClass('text-gray-400');
  });
});
