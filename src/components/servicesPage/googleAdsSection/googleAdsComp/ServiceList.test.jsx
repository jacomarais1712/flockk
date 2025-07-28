import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServiceList from './ServiceList';

describe('ServiceList', () => {
  it('renders the section heading', () => {
    render(<ServiceList />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('What we can help you with:');
  });

  it('renders all service items', () => {
    render(<ServiceList />);
    const expectedServices = [
      'Full campaign setup & structuring',
      'Keyword and audience targeting strategies',
      'Performance Max & Dynamic Search Ads',
      'Ongoing optimisation to reduce CPA and increase ROAS',
      'A/B testing of ad creatives, extensions, and landing pages',
      'Budget pacing and bid strategy management'
    ];

    expectedServices.forEach(service => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });
  });

  it('renders the correct number of list items', () => {
    render(<ServiceList />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(6);
  });

  it('has proper semantic structure with ul and li elements', () => {
    render(<ServiceList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(6);
  });

  it('renders as a section element', () => {
    const { container } = render(<ServiceList />);
    expect(container.firstChild.tagName).toBe('SECTION');
  });
});
