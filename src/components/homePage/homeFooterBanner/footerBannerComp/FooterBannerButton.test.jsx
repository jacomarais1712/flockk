import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FooterBannerButton from './FooterBannerButton';

describe('FooterBannerButton', () => {
  const defaultProps = {
    text: 'Test Button',
    iconSrc: 'test-icon.png',
    onClick: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders button with correct text', () => {
    render(<FooterBannerButton {...defaultProps} />);

    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
  });

  it('renders icon with correct src', () => {
    render(<FooterBannerButton {...defaultProps} />);

    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('src', 'test-icon.png');
  });

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    render(<FooterBannerButton {...defaultProps} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('has correct CSS classes for styling', () => {
    render(<FooterBannerButton {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'flex',
      'gap-3',
      'justify-center',
      'items-center',
      'bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)]',
      'text-zinc-900'
    );
  });

  it('has proper accessibility attributes', () => {
    render(<FooterBannerButton {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-2');
  });

  it('has hover and focus states', () => {
    render(<FooterBannerButton {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('hover:opacity-90', 'transition-opacity');
    expect(button).toHaveClass('focus:ring-emerald-400', 'focus:ring-offset-2');
  });

  it('renders icon with proper styling classes', () => {
    render(<FooterBannerButton {...defaultProps} />);

    const icon = screen.getByRole('img');
    expect(icon).toHaveClass(
      'object-contain',
      'shrink-0',
      'self-stretch',
      'my-auto',
      'w-8',
      'aspect-square',
      'fill-emerald-950'
    );
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<FooterBannerButton {...defaultProps} />);

    const button = screen.getByRole('button');

    // Tab to focus the button
    await user.tab();
    expect(button).toHaveFocus();

    // Press Enter to activate
    await user.keyboard('{Enter}');
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
