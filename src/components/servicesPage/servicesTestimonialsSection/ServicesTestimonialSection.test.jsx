import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ServicesTestimonialSection from './ServicesTestimonialSection';

// Mock the child components
vi.mock('./TestimonialSlide', () => ({
  TestimonialSlide: ({ quote, name }) => (
    <div data-testid="testimonial-slide">
      <div>{quote}</div>
      {name && <div>{name}</div>}
    </div>
  )
}));

vi.mock('./NavigationArrow', () => ({
  NavigationArrow: ({ direction, onClick }) => (
    <button
      data-testid={`nav-${direction}`}
      onClick={onClick}
    >
      {direction} arrow
    </button>
  )
}));

vi.mock('./SliderDots', () => ({
  SliderDots: ({ totalSlides, currentSlide, onDotClick }) => (
    <div data-testid="slider-dots">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          data-testid={`dot-${index}`}
          onClick={() => onDotClick(index)}
          className={index === currentSlide ? 'active' : ''}
        >
          Dot {index}
        </button>
      ))}
    </div>
  )
}));

describe('ServicesTestimonialSection', () => {
  it('renders the testimonial component', () => {
    render(<ServicesTestimonialSection />);

    expect(screen.getAllByTestId('testimonial-slide')).toHaveLength(2);
    expect(screen.getByTestId('nav-left')).toBeInTheDocument();
    expect(screen.getByTestId('nav-right')).toBeInTheDocument();
    expect(screen.getByTestId('slider-dots')).toBeInTheDocument();
  });

  it('displays the first testimonial initially', () => {
    render(<ServicesTestimonialSection />);

    expect(screen.getByText(/Flockk helped us simplify/)).toBeInTheDocument();
    expect(screen.getByText('Ava Leonard')).toBeInTheDocument();
  });

  it('navigates to next slide when right arrow is clicked', () => {
    render(<ServicesTestimonialSection />);

    const rightArrow = screen.getByTestId('nav-right');
    fireEvent.click(rightArrow);

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
  });

  it('navigates to previous slide when left arrow is clicked', () => {
    render(<ServicesTestimonialSection />);

    const leftArrow = screen.getByTestId('nav-left');
    fireEvent.click(leftArrow);

    // Should wrap around to the last slide
    expect(screen.getByText(/Final testimonial showcasing/)).toBeInTheDocument();
  });

  it('navigates to specific slide when dot is clicked', () => {
    render(<ServicesTestimonialSection />);

    const thirdDot = screen.getByTestId('dot-2');
    fireEvent.click(thirdDot);

    expect(screen.getByText(/Another testimonial that demonstrates/)).toBeInTheDocument();
    expect(screen.getByText('John Smith')).toBeInTheDocument();
  });

  it('shows correct number of dots', () => {
    render(<ServicesTestimonialSection />);

    expect(screen.getByTestId('dot-0')).toBeInTheDocument();
    expect(screen.getByTestId('dot-1')).toBeInTheDocument();
    expect(screen.getByTestId('dot-2')).toBeInTheDocument();
    expect(screen.getByTestId('dot-3')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<ServicesTestimonialSection />);

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();

    const navButtons = screen.getAllByRole('button');
    expect(navButtons.length).toBeGreaterThan(0);
  });
});
