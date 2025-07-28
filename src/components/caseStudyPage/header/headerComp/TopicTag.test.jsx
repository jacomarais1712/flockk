import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TopicTag from './TopicTag';

describe('TopicTag', () => {
  it('renders the provided text correctly', () => {
    render(<TopicTag text="Test Tag" />);

    const tagText = screen.getByText('Test Tag');
    expect(tagText).toBeInTheDocument();
    expect(tagText).toHaveTextContent('Test Tag');
  });

  it('applies correct styling classes', () => {
    render(<TopicTag text="Meta Ads" />);

    const tagText = screen.getByText('Meta Ads');
    expect(tagText).toHaveClass('text-neutral-300');
    expect(tagText).toHaveClass('uppercase');
    expect(tagText).toHaveClass('font-bold');
    expect(tagText).toHaveClass('text-xs');
  });

  it('has correct container styling', () => {
    render(<TopicTag text="Tag Management" />);

    const container = screen.getByText('Tag Management').parentElement;
    expect(container).toHaveClass('bg-zinc-800');
    expect(container).toHaveClass('rounded-sm');
    expect(container).toHaveClass('px-2.5');
    expect(container).toHaveClass('py-1.5');
  });

  it('handles different text values', () => {
    const { rerender } = render(<TopicTag text="First Tag" />);
    expect(screen.getByText('First Tag')).toBeInTheDocument();

    rerender(<TopicTag text="Second Tag" />);
    expect(screen.getByText('Second Tag')).toBeInTheDocument();
    expect(screen.queryByText('First Tag')).not.toBeInTheDocument();
  });
});
