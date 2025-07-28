import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { GradientButton } from './GradientButton';

describe('GradientButton', () => {
  it('renders button with children text', () => {
    render(<GradientButton>Click me</GradientButton>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<GradientButton onClick={handleClick}>Click me</GradientButton>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders icon when iconSrc is provided', () => {
    render(
      <GradientButton iconSrc="test-icon.png" iconAlt="Test icon">
        Button text
      </GradientButton>
    );

    const icon = screen.getByAltText('Test icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', 'test-icon.png');
  });

  it('does not render icon when iconSrc is not provided', () => {
    render(<GradientButton>Button text</GradientButton>);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<GradientButton className="custom-class">Button</GradientButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<GradientButton disabled aria-label="Custom label">Button</GradientButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('has correct gradient background classes', () => {
    render(<GradientButton>Button</GradientButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)]');
  });

  it('has proper accessibility attributes', () => {
    render(<GradientButton>Button</GradientButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-emerald-400');
  });
});
