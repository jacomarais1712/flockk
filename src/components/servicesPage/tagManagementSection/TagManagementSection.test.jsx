import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TagManagementSection } from './TagManagementSection';

describe('TagManagementSection', () => {
  it('renders the main heading', () => {
    render(<TagManagementSection />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tag Management & Tracking');
  });

  it('renders the subheading', () => {
    render(<TagManagementSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Advanced Tracking Without Developer Delays');
  });

  it('renders the description paragraph', () => {
    render(<TagManagementSection />);
    expect(screen.getByText(/We use GTM to deploy tracking/)).toBeInTheDocument();
  });

  it('renders the feature list heading', () => {
    render(<TagManagementSection />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('What we can help you with:');
  });

  it('renders all feature list items', () => {
    render(<TagManagementSection />);

    const expectedFeatures = [
      'GTM container setup and audit',
      'Custom event tracking (form submits, button clicks, scrolls, video plays)',
      'Debugging and QA of tags',
      'Server-side tagging setup'
    ];

    expectedFeatures.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders the correct number of check icons', () => {
    render(<TagManagementSection />);
    const checkIcons = screen.getAllByRole('img', { hidden: true });
    expect(checkIcons).toHaveLength(4);
  });

  it('has proper semantic structure', () => {
    render(<TagManagementSection />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });

  it('applies responsive classes correctly', () => {
    const { container } = render(<TagManagementSection />);
    const section = container.querySelector('section');

    expect(section).toHaveClass('max-md:gap-16');
    expect(section).toHaveClass('max-sm:gap-10');
  });
});
