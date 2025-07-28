import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutFooterBanner from './AboutFooterBanner';

// Mock the GradientButton component
vi.mock('./GradientButton', () => ({
  GradientButton: ({ children, onClick, iconSrc, iconAlt }) => (
    <button onClick={onClick} data-testid="gradient-button">
      {children}
      {iconSrc && <img src={iconSrc} alt={iconAlt} />}
    </button>
  )
}));

describe('AboutFooterBanner', () => {
  it('renders the main heading', () => {
    render(<AboutFooterBanner />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Stop Guessing. Start Scaling.');
  });

  it('renders the description text', () => {
    render(<AboutFooterBanner />);
    expect(screen.getByText('Get data-backed growth strategies that actually move the needle.')).toBeInTheDocument();
  });

  it('renders the background image', () => {
    render(<AboutFooterBanner />);
    const backgroundImage = screen.getByAltText('Background');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/687e1c327ca8da9e00e8df3ba16df89e17106a17?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce');
  });

  it('renders the CTA button', () => {
    render(<AboutFooterBanner />);
    expect(screen.getByTestId('gradient-button')).toHaveTextContent("Let's Talk");
  });

  it('handles button click', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<AboutFooterBanner />);

    fireEvent.click(screen.getByTestId('gradient-button'));
    expect(consoleSpy).toHaveBeenCalledWith("Let's Talk button clicked");

    consoleSpy.mockRestore();
  });

  it('uses semantic HTML structure', () => {
    render(<AboutFooterBanner />);

    // Check for section element
    expect(screen.getByRole('region')).toBeInTheDocument();

    // Check for header element
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Check for proper heading hierarchy
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has proper responsive classes', () => {
    render(<AboutFooterBanner />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-md:px-5');
  });

  it('passes correct props to GradientButton', () => {
    render(<AboutFooterBanner />);
    const button = screen.getByTestId('gradient-button');
    const icon = screen.getByAltText('Arrow icon');

    expect(icon).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/526482164ebe7541eb4c3abb23766804a7113542?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce');
  });

  it('has correct text styling classes', () => {
    render(<AboutFooterBanner />);
    const heading = screen.getByRole('heading', { level: 1 });
    const description = screen.getByText('Get data-backed growth strategies that actually move the needle.');

    expect(heading).toHaveClass('text-5xl', 'font-bold', 'tracking-tight', 'leading-tight');
    expect(description).toHaveClass('mt-5', 'text-xl', 'tracking-wide');
  });
});
