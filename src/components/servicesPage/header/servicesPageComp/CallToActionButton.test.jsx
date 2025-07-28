import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CallToActionButton } from './CallToActionButton';

describe('CallToActionButton', () => {
  it('renders the button text', () => {
    render(<CallToActionButton text="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<CallToActionButton text="Click Me" onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('works without onClick handler', () => {
    render(<CallToActionButton text="Click Me" />);
    const button = screen.getByRole('button');

    expect(() => fireEvent.click(button)).not.toThrow();
  });

  it('has proper button attributes', () => {
    render(<CallToActionButton text="Test" />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('cursor-pointer');
  });

  it('includes the arrow icon', () => {
    render(<CallToActionButton text="Test" />);
    const button = screen.getByRole('button');
    const svgContainer = button.querySelector('div[dangerouslySetInnerHTML]');

    expect(svgContainer).toBeInTheDocument();
  });

  it('applies responsive styling classes', () => {
    render(<CallToActionButton text="Test" />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('max-sm:gap-2', 'max-sm:py-2', 'max-sm:pr-2', 'max-sm:pl-4');
  });
});
