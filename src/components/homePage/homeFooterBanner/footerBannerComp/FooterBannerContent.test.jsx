import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FooterBannerContent from './FooterBannerContent';

describe('FooterBannerContent', () => {
  const defaultProps = {
    iconSrc: 'main-icon.png',
    heading: 'Test Heading',
    description: 'Test description',
    buttonText: 'Test Button',
    buttonIconSrc: 'button-icon.png',
    onButtonClick: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all content elements', () => {
    render(<FooterBannerContent {...defaultProps} />);

    // Check main icon
    const mainIcon = screen.getByRole('img', { hidden: true });
    expect(mainIcon).toHaveAttribute('src', 'main-icon.png');

    // Check heading
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Test Heading');

    // Check description
    const description = screen.getByText('Test description');
    expect(description).toBeInTheDocument();

    // Check button
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test Button');
  });

  it('passes props correctly to child components', () => {
    render(<FooterBannerContent {...defaultProps} />);

    // Verify CTAHeading receives correct props
    expect(screen.getByRole('heading')).toHaveTextContent('Test Heading');
    expect(screen.getByText('Test description')).toBeInTheDocument();

    // Verify CTAButton receives correct props
    expect(screen.getByRole('button')).toHaveTextContent('Test Button');
  });

  it('handles button click events', async () => {
    const user = userEvent.setup();
    render(<FooterBannerContent {...defaultProps} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(defaultProps.onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('has correct container styling', () => {
    render(<FooterBannerContent {...defaultProps} />);

    const container = screen.getByRole('heading').closest('div').parentElement;
    expect(container).toHaveClass(
      'flex',
      'relative',
      'flex-col',
      'items-center',
      'max-w-full',
      'w-[768px]'
    );
  });

  it('renders main icon with correct styling', () => {
    render(<FooterBannerContent {...defaultProps} />);

    const mainIcon = screen.getByRole('img', { hidden: true });
    expect(mainIcon).toHaveClass(
      'object-contain',
      'aspect-[78.02/104.00]',
      'fill-zinc-200',
      'w-[78px]'
    );
  });

  it('maintains proper content order', () => {
    render(<FooterBannerContent {...defaultProps} />);

    const container = screen.getByRole('heading').closest('div').parentElement;
    const children = Array.from(container.children);

    // Should have icon first, then heading content, then button
    expect(children[0].tagName).toBe('IMG'); // Main icon
    expect(children[1]).toContainElement(screen.getByRole('heading')); // Heading content
    expect(children[2]).toContainElement(screen.getByRole('button')); // Button
  });

  it('handles missing optional props gracefully', () => {
    const minimalProps = {
      iconSrc: 'icon.png',
      heading: 'Heading',
      description: 'Description',
      buttonText: 'Button',
      buttonIconSrc: 'button-icon.png'
      // onButtonClick is optional
    };

    expect(() => {
      render(<FooterBannerContent {...minimalProps} />);
    }).not.toThrow();

    // Should still render all elements
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports accessibility features', () => {
    render(<FooterBannerContent {...defaultProps} />);

    // Main icon should have empty alt text (decorative)
    const mainIcon = screen.getByRole('img', { hidden: true });
    expect(mainIcon).toHaveAttribute('alt', '');

    // Button should be focusable
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });
});
