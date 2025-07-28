import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CheckIcon from './CheckIcon';

describe('CheckIcon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('has correct dimensions', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('has correct viewBox', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('contains a path element with correct fill color', () => {
    const { container } = render(<CheckIcon />);
    const path = container.querySelector('path');
    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute('fill', '#19E48B');
  });

  it('has proper CSS classes and styles', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('check-icon');
    expect(svg).toHaveStyle({
      width: '24px',
      height: '24px',
      position: 'relative',
      flexShrink: 0
    });
  });
});
