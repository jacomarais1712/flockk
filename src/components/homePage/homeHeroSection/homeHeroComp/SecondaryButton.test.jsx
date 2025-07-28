import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SecondaryButton } from './SecondaryButton';

describe('SecondaryButton', () => {
  it('renders with provided text', () => {
    const testText = 'Secondary Action';
    render(<SecondaryButton text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<SecondaryButton text="Test Secondary" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Test Secondary'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct styling classes', () => {
    render(<SecondaryButton text="Styled Secondary" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('rounded', 'cursor-pointer');

    const textElement = screen.getByText('Styled Secondary');
    expect(textElement).toHaveClass('text-white', 'font-bold');
  });

  it('contains SVG arrow icon', () => {
    render(<SecondaryButton text="Button with Arrow" />);

    const button = screen.getByRole('button');
    const svgContainer = button.querySelector('div[dangerouslySetInnerHTML]');
    expect(svgContainer).toBeInTheDocument();
  });

  it('works without onClick handler', () => {
    render(<SecondaryButton text="No Handler" />);

    const button = screen.getByRole('button');
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
