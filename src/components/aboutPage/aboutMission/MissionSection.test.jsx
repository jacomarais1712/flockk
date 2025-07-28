import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MissionSection from './MissionSection';

describe('MissionSection', () => {
  it('renders the mission section with correct heading', () => {
    render(<MissionSection />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Clarity That Leads to Measurable Growth'
    );
  });

  it('displays the mission tagline', () => {
    render(<MissionSection />);

    expect(screen.getByText('OUR MISSION')).toBeInTheDocument();
  });

  it('renders the mission description', () => {
    render(<MissionSection />);

    expect(screen.getByText(/We believe growth happens when performance meets precision/)).toBeInTheDocument();
  });

  it('displays all checklist items', () => {
    render(<MissionSection />);

    const checklistItems = [
      'Clarity over chaos',
      'Execution backed by data',
      'Real relationships, not retainer traps',
      'We scale what works, and fix what doesn\'t'
    ];

    checklistItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders the CTA button', () => {
    render(<MissionSection />);

    expect(screen.getByRole('button', { name: /How We Can Help You Grow/i })).toBeInTheDocument();
  });

  it('displays the placeholder image', () => {
    render(<MissionSection />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/295a67bc57d5d2f56a90701fb423806ac765efad?width=1114');
    expect(image).toHaveClass('aspect-square', 'h-[557px]', 'w-[557px]');
  });

  it('has correct semantic structure', () => {
    render(<MissionSection />);

    // Check for section element
    expect(screen.getByRole('region')).toBeInTheDocument();

    // Check for list structure
    expect(screen.getByRole('list')).toBeInTheDocument();

    // Check for list items
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  it('applies correct CSS classes for responsive design', () => {
    render(<MissionSection />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('bg-emerald-950', 'px-16', 'py-28');
  });
});
