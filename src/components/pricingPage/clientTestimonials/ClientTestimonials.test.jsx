import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ClientTestimonials } from './ClientTestimonials';

describe('TestimonialSection', () => {
  it('renders the section header with correct tagline and title', () => {
    render(<ClientTestimonials />);

    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('What Our Clients Say About Us')).toBeInTheDocument();
  });

  it('renders all four testimonial cards', () => {
    render(<ClientTestimonials />);

    const testimonialCards = screen.getAllByRole('article');
    expect(testimonialCards).toHaveLength(4);
  });

  it('renders testimonial quotes with proper formatting', () => {
    render(<ClientTestimonials />);

    const quotes = screen.getAllByText(/Lorem ipsum dolor sit amet/);
    expect(quotes).toHaveLength(4);

    // Check that quotes are wrapped in quotation marks
    quotes.forEach(quote => {
      expect(quote.textContent).toMatch(/^".*"$/);
    });
  });

  it('renders customer names and titles', () => {
    render(<ClientTestimonials />);

    expect(screen.getByText('Ben Finnigan')).toBeInTheDocument();
    expect(screen.getByText('Founder, Qost')).toBeInTheDocument();
    expect(screen.getAllByText('Ava Leonard')).toHaveLength(3);
    expect(screen.getAllByText('Marketing, Fleeq')).toHaveLength(3);
  });

  it('renders all company logos with correct attributes', () => {
    render(<ClientTestimonials />);

    const companyLogos = screen.getAllByAltText('Company logo');
    expect(companyLogos).toHaveLength(4);

    companyLogos.forEach(logo => {
      expect(logo).toHaveClass('object-contain', 'max-w-full', 'aspect-[4.67]', 'w-[187px]');
    });
  });

  it('renders all avatar images with correct attributes', () => {
    render(<ClientTestimonials />);

    const avatarImages = screen.getAllByAltText(/avatar$/);
    expect(avatarImages).toHaveLength(4);

    avatarImages.forEach(avatar => {
      expect(avatar).toHaveClass('object-contain', 'shrink-0', 'self-stretch', 'my-auto', 'w-14', 'rounded-full', 'aspect-square');
    });
  });

  it('has proper semantic HTML structure', () => {
    render(<ClientTestimonials />);

    // Check for semantic elements
    expect(screen.getByRole('banner')).toBeInTheDocument(); // header
    expect(screen.getByRole('region')).toBeInTheDocument(); // section
    expect(screen.getAllByRole('article')).toHaveLength(4); // testimonial cards
  });

  it('applies correct CSS classes for responsive design', () => {
    const { container } = render(<TestimonialSection />);

    const mainContainer = container.firstChild;
    expect(mainContainer).toHaveClass('flex', 'flex-col', 'items-end', 'px-20', 'max-md:pl-5');

    const section = screen.getByRole('region');
    expect(section).toHaveClass('flex', 'flex-col', 'items-center', 'pt-20', 'pb-32', 'w-full', 'max-w-[1440px]', 'max-md:pb-24', 'max-md:max-w-full');
  });
});
