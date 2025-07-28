import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

// Mock the child components
vi.mock('./ContactHero', () => ({
  ContactHero: () => <div data-testid="contact-hero">Contact Hero</div>
}));

vi.mock('./ContactForm', () => ({
  ContactForm: () => <div data-testid="contact-form">Contact Form</div>
}));

vi.mock('./ContactInfo', () => ({
  ContactInfo: ({ title, content }) => (
    <div data-testid="contact-info">
      <h3>{title}</h3>
      <span>{content}</span>
    </div>
  )
}));

describe('Contact', () => {
  it('renders the main contact component', () => {
    render(<Contact />);

    expect(screen.getByTestId('contact-hero')).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('renders all contact info sections', () => {
    render(<Contact />);

    const contactInfoElements = screen.getAllByTestId('contact-info');
    expect(contactInfoElements).toHaveLength(4);

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('renders background image with correct src', () => {
    render(<Contact />);

    const backgroundImage = screen.getByAltText('Contact background');
    expect(backgroundImage).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/34173e9b5d2ce3752af6d43388168283f78c6523?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9');
  });

  it('has proper semantic structure', () => {
    render(<Contact />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();

    const sections = screen.getAllByRole('region');
    expect(sections.length).toBeGreaterThan(0);
  });
});
