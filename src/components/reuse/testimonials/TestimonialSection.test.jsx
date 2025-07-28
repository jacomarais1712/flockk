import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TestimonialSection from './TestimonialSection';

describe('TestimonialSection', () => {
  it('renders the section title correctly', () => {
    render(<TestimonialSection />);

    expect(screen.getByText('TESTIMONIALS')).toBeInTheDocument();
    expect(screen.getByText('What Our Clients Say About Us')).toBeInTheDocument();
  });

  it('renders both testimonial cards', () => {
    render(<TestimonialSection />);

    expect(screen.getByText(/Working with Flockk gave us total clarity/)).toBeInTheDocument();
    expect(screen.getByText(/Everything just made sense/)).toBeInTheDocument();
  });

  it('renders testimonial authors', () => {
    render(<TestimonialSection />);

    expect(screen.getByText('Ben Finnigan')).toBeInTheDocument();
    expect(screen.getByText('Founder, Qost')).toBeInTheDocument();
    expect(screen.getByText('Ava Leonard')).toBeInTheDocument();
    expect(screen.getByText('Marketing, Fleeq')).toBeInTheDocument();
  });

  it('renders navigation arrows with proper accessibility', () => {
    render(<TestimonialSection />);

    expect(screen.getByLabelText('Previous testimonial')).toBeInTheDocument();
    expect(screen.getByLabelText('Next testimonial')).toBeInTheDocument();
  });

  it('renders slider dots component', () => {
    render(<TestimonialSection />);

    const dotsContainer = document.querySelector('.dots-svg');
    expect(dotsContainer).toBeInTheDocument();
  });

  it('uses semantic HTML structure', () => {
    render(<TestimonialSection />);

    expect(screen.getByRole('banner')).toBeInTheDocument(); // header element
    expect(screen.getAllByRole('article')).toHaveLength(2); // testimonial cards
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2); // author names
  });

  it('renders company logos with proper alt text', () => {
    render(<TestimonialSection />);

    const logos = screen.getAllByAltText('Company Logo');
    expect(logos).toHaveLength(2);
    logos.forEach(logo => {
      expect(logo).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/a53dcbba800b2a4d7e990b72eea33ef662f7f46d?width=374');
    });
  });
});
