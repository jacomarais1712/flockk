import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ServicesHeader } from './ServicesHeader';

describe('Header65', () => {
  it('renders the tagline badge', () => {
    render(<ServicesHeader />);
    expect(screen.getByText('SERVICES')).toBeInTheDocument();
  });

  it('renders the hero heading with correct text', () => {
    render(<ServicesHeader />);
    expect(screen.getByText('Drive Growth With Our')).toBeInTheDocument();
    expect(screen.getByText('Expert Solutions')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<ServicesHeader />);
    expect(screen.getByText(/Unlock your business potential/)).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    render(<ServicesHeader />);
    const button = screen.getByRole('button', { name: /book a call/i });
    expect(button).toBeInTheDocument();
  });

  it('handles button click', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<ServicesHeader />);

    const button = screen.getByRole('button', { name: /book a call/i });
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('Book a call clicked');
    consoleSpy.mockRestore();
  });

  it('uses semantic HTML elements', () => {
    render(<ServicesHeader />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // header element
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<ServicesHeader />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });
});
