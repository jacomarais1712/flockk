import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { StatDivider } from './StatDivider';

describe('StatDivider', () => {
  it('renders with correct styling classes', () => {
    const { container } = render(<StatDivider />);
    const divider = container.firstChild;

    expect(divider).toHaveClass(
      'relative',
      'bg-white',
      'bg-opacity-10',
      'h-[120px]',
      'w-[1.5px]'
    );
  });

  it('has responsive classes for different screen sizes', () => {
    const { container } = render(<StatDivider />);
    const divider = container.firstChild;

    expect(divider).toHaveClass('max-md:h-[100px]');
    expect(divider).toHaveClass('max-sm:h-[1.5px]');
    expect(divider).toHaveClass('max-sm:w-[120px]');
  });
});
