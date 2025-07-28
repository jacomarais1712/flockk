import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FooterBanner from './FooterBanner';

describe('FooterBanner', () => {
  it('renders the main heading correctly', () => {
    render(<FooterBanner />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Ready to Grow with Confidence?');
  });

  it('renders the description text', () => {
    render(<FooterBanner />);

    const description = screen.getByText(/Get a tailored growth strategy/i);
    expect(description).toBeInTheDocument();
  });

  it('renders the CTA button with correct text', () => {
    render(<FooterBanner />);

    const button = screen.getByRole('button', { name: /speak to us/i });
    expect(button).toBeInTheDocument();
  });

  it('renders all required images', () => {
    render(<FooterBanner />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);

    // Check background image
    expect(images[0]).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/a17eea9027d63026c0a708ea887d871e0c9e52e1?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64');

    // Check icon image
    expect(images[1]).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/31b8cdb16d5402e0fe2c7a90e484bc499c8c0500?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64');

    // Check button icon
    expect(images[2]).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/22a32b9c9ffadccdbeb5b31859a7e848b6261a84?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64');
  });

  it('has proper semantic structure', () => {
    render(<FooterBanner />);

    // Should be wrapped in a section element
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();

    // Should have a heading
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();

    // Should have a button
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('applies correct CSS classes for styling', () => {
    render(<FooterBanner />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('flex', 'relative', 'flex-col', 'justify-center', 'items-center');

    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('text-5xl', 'font-bold', 'text-zinc-200');

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)]');
  });

  it('handles button click events', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const user = userEvent.setup();

    render(<FooterBanner />);

    const button = screen.getByRole('button', { name: /speak to us/i });
    await user.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('CTA button clicked');

    consoleSpy.mockRestore();
  });

  it('has proper responsive classes', () => {
    render(<FooterBanner />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-md:px-5', 'max-md:py-24');

    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('max-md:text-4xl', 'max-md:max-w-full');
  });
});
