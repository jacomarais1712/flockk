import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServicesFooterBanner from './ServicesFooterBanner';

describe('ServicesFooterBanner', () => {
  it('renders the main heading correctly', () => {
    render(<ServicesFooterBanner />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Let's Find Your Flockk");
  });

  it('renders the description text', () => {
    render(<ServicesFooterBanner />);
    const description = screen.getByText("Let's talk strategy, growth, and what's next for your business.");
    expect(description).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    render(<ServicesFooterBanner />);
    const button = screen.getByRole('button', { name: /speak to us/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the background image with correct src', () => {
    render(<ServicesFooterBanner />);
    const backgroundImage = screen.getByAltText('Background');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/3d9d9453ba30d0d8f03bbea748b4c1b90abc43b9?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c');
  });

  it('renders the button icon with correct src', () => {
    render(<ServicesFooterBanner />);
    const buttonIcon = screen.getByAltText('Arrow icon');
    expect(buttonIcon).toBeInTheDocument();
    expect(buttonIcon).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6083b9b2d7ebc08787b571e067de24a9be6794b?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c');
  });

  it('has proper semantic structure', () => {
    render(<ServicesFooterBanner />);
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('applies correct CSS classes for styling', () => {
    render(<ServicesFooterBanner />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('flex', 'relative', 'flex-col', 'justify-center', 'items-center');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-5xl', 'font-bold', 'tracking-tight', 'leading-tight', 'text-zinc-200');

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)]', 'text-zinc-900');
  });

  it('has responsive classes for mobile devices', () => {
    render(<ServicesFooterBanner />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-md:px-5', 'max-md:py-24');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('max-md:max-w-full', 'max-md:text-4xl');
  });

  it('renders with proper accessibility attributes', () => {
    render(<ServicesFooterBanner />);
    const backgroundImage = screen.getByAltText('Background');
    expect(backgroundImage).toHaveAttribute('alt', 'Background');

    const buttonIcon = screen.getByAltText('Arrow icon');
    expect(buttonIcon).toHaveAttribute('alt', 'Arrow icon');
  });
});
