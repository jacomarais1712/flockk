import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustTestimonial } from './CustTestimonial';
import { CustTestiCard } from './CustTestiCard';
import { Quote } from './Quote';
import { Avatar } from './Avatar';

describe('CustTestimonial', () => {
  it('renders the main testimonial section', () => {
    render(<CustTestimonial />);

    // Check if the main section is rendered
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
  });

  it('renders both testimonial cards', () => {
    render(<CustTestimonial />);

    // Check for the specific quotes
    expect(screen.getByText(/Flockk transformed our digital presence/)).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
  });

  it('renders avatar information correctly', () => {
    render(<CustTestimonial />);

    // Check for avatar name and title
    expect(screen.getByText('Ava Leonard')).toBeInTheDocument();
    expect(screen.getByText('Marketing, XYZ Ltd.')).toBeInTheDocument();
  });

  it('renders images with correct URLs', () => {
    render(<CustTestimonial />);

    // Check for images
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3); // Logo + 2 avatars

    // Check specific image sources
    expect(screen.getByAltText('Company logo')).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/f1fd1be130265254b55f4fae608cb591aa3ccf5f?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9');
    expect(screen.getByAltText('Ava Leonard')).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9');
    expect(screen.getByAltText('Customer testimonial')).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9');
  });
});

describe('TestimonialCard', () => {
  it('renders with dark variant correctly', () => {
    render(
      <CustTestiCard
        variant="dark"
        quote="Test quote"
        avatarSrc="test.jpg"
        name="Test Name"
        title="Test Title"
      />
    );

    expect(screen.getByText('Test quote')).toBeInTheDocument();
    expect(screen.getByText('Test Name')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders with light variant correctly', () => {
    render(
      <CustTestiCard
        variant="light"
        quote="Test quote"
        avatarSrc="test.jpg"
      />
    );

    expect(screen.getByText('Test quote')).toBeInTheDocument();
  });

  it('renders logo when provided', () => {
    render(
      <CustTestiCard
        variant="dark"
        logo="logo.jpg"
        logoAlt="Test Logo"
        quote="Test quote"
        avatarSrc="test.jpg"
      />
    );

    expect(screen.getByAltText('Test Logo')).toBeInTheDocument();
  });
});

describe('Quote', () => {
  it('renders quote with light variant', () => {
    render(<Quote variant="light">Test quote</Quote>);

    const quote = screen.getByText('Test quote');
    expect(quote).toBeInTheDocument();
    expect(quote).toHaveClass('text-neutral-950');
  });

  it('renders quote with dark variant', () => {
    render(<Quote variant="dark">Test quote</Quote>);

    const quote = screen.getByText('Test quote');
    expect(quote).toBeInTheDocument();
    expect(quote).toHaveClass('text-emerald-50');
  });
});

describe('Avatar', () => {
  it('renders avatar image', () => {
    render(<Avatar src="test.jpg" alt="Test Avatar" />);

    const avatar = screen.getByAltText('Test Avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'test.jpg');
  });

  it('renders name and title when provided', () => {
    render(
      <Avatar
        src="test.jpg"
        name="Test Name"
        title="Test Title"
      />
    );

    expect(screen.getByText('Test Name')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('applies correct text color for dark variant', () => {
    render(
      <Avatar
        src="test.jpg"
        name="Test Name"
        variant="dark"
      />
    );

    const name = screen.getByText('Test Name');
    expect(name).toHaveClass('text-emerald-50');
  });

  it('applies correct text color for light variant', () => {
    render(
      <Avatar
        src="test.jpg"
        name="Test Name"
        variant="light"
      />
    );

    const name = screen.getByText('Test Name');
    expect(name).toHaveClass('text-neutral-950');
  });
});
