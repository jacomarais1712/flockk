import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PrimaryButton } from './PrimaryButton';

describe('PrimaryButton', () => {
  it('renders with provided text', () => {
    const testText = 'Click Me';
    render(<PrimaryButton text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<PrimaryButton text="Test Button" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Test Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct styling classes', () => {
    render(<PrimaryButton text="Styled Button" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-emerald-400',
      'rounded',
      'cursor-pointer'
    );
  });

  it('contains SVG arrow icon', () => {
    render(<PrimaryButton text="Button with Icon" />);

    const button = screen.getByRole('button');
    const svgContainer = button.querySelector('div[dangerouslySetInnerHTML]');
    expect(svgContainer).toBeInTheDocument();
  });

  it('works without onClick handler', () => {
    render(<PrimaryButton text="No Handler" />);

    const button = screen.getByRole('button');
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
