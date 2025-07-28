import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SocialLinks } from './SocialLinks';

describe('SocialLinks', () => {
  it('renders social links container', () => {
    const { container } = render(<SocialLinks />);

    const socialContainer = container.firstChild;
    expect(socialContainer).toBeInTheDocument();
  });

  it('renders all four social media icons', () => {
    const { container } = render(<SocialLinks />);

    const socialIcons = container.querySelectorAll('svg');
    expect(socialIcons).toHaveLength(4);
  });

  it('has correct responsive classes', () => {
    const { container } = render(<SocialLinks />);

    const socialContainer = container.firstChild;
    expect(socialContainer).toHaveClass('flex', 'gap-2', 'justify-end', 'items-center', 'flex-[1_0_0]', 'max-md:flex-none', 'max-md:justify-center', 'max-sm:gap-3');
  });

  it('has correct styling for social icon containers', () => {
    const { container } = render(<SocialLinks />);

    const iconContainers = container.querySelectorAll('.bg-neutral-800');
    expect(iconContainers).toHaveLength(4);

    iconContainers.forEach(container => {
      expect(container).toHaveClass('flex', 'gap-2', 'items-center', 'p-2', 'bg-neutral-800', 'rounded-[40px]');
    });
  });
});
