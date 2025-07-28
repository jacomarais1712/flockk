import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ValuesSection } from './valuesComp/ValuesSection';
import { SectionTitle } from './valuesComp/SectionTitle';
import { ValueCard } from './valuesComp/ValueCard';
import { ValuesGrid } from './valuesComp/ValuesGrid';

describe('ValuesSection', () => {
  it('renders the main values section', () => {
    render(<ValuesSection />);

    expect(screen.getByText('Our Values')).toBeInTheDocument();
    expect(screen.getByText('Guided By Our Values That Drive Results')).toBeInTheDocument();
    expect(screen.getByText('Our values shape how we work, how we communicate, and how we deliver for every client.')).toBeInTheDocument();
  });

  it('renders all value cards', () => {
    render(<ValuesSection />);

    expect(screen.getByText('Technical Expertise')).toBeInTheDocument();
    expect(screen.getByText('Transparency')).toBeInTheDocument();
    expect(screen.getByText('Efficiency')).toBeInTheDocument();
    expect(screen.getByText('Client-Centricity')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<ValuesSection />);

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Guided By Our Values That Drive Results');
  });
});

describe('SectionTitle', () => {
  const defaultProps = {
    tagline: 'Test Tagline',
    heading: 'Test Heading',
    description: 'Test description'
  };

  it('renders all provided content', () => {
    render(<SectionTitle {...defaultProps} />);

    expect(screen.getByText('Test Tagline')).toBeInTheDocument();
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('uses proper semantic HTML', () => {
    render(<SectionTitle {...defaultProps} />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<SectionTitle {...defaultProps} />);

    const tagline = screen.getByText('Test Tagline');
    expect(tagline).toHaveClass('text-emerald-400');

    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('text-5xl', 'font-bold', 'text-emerald-50');
  });
});

describe('ValueCard', () => {
  const defaultProps = {
    backgroundImage: 'test-bg.jpg',
    icon: 'test-icon.svg',
    title: 'Test Title',
    description: 'Test description'
  };

  it('renders card content correctly', () => {
    render(<ValueCard {...defaultProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders images with correct attributes', () => {
    render(<ValueCard {...defaultProps} />);

    const backgroundImage = screen.getByAltText('');
    expect(backgroundImage).toHaveAttribute('src', 'test-bg.jpg');

    const icon = screen.getByAltText('Test Title icon');
    expect(icon).toHaveAttribute('src', 'test-icon.svg');
  });

  it('applies custom className and marginTop', () => {
    render(
      <ValueCard
        {...defaultProps}
        className="custom-class"
        marginTop="mt-10"
      />
    );

    const article = screen.getByRole('article');
    expect(article).toHaveClass('custom-class', 'mt-10');
  });

  it('uses semantic article element', () => {
    render(<ValueCard {...defaultProps} />);

    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});

describe('ValuesGrid', () => {
  it('renders all four value cards', () => {
    render(<ValuesGrid />);

    expect(screen.getByText('Technical Expertise')).toBeInTheDocument();
    expect(screen.getByText('Transparency')).toBeInTheDocument();
    expect(screen.getByText('Efficiency')).toBeInTheDocument();
    expect(screen.getByText('Client-Centricity')).toBeInTheDocument();
  });

  it('renders cards with correct descriptions', () => {
    render(<ValuesGrid />);

    expect(screen.getByText('Deep understanding of ad platforms and analytics.')).toBeInTheDocument();
    expect(screen.getByText('Clear communication, honest reporting, and no hiding behind jargon.')).toBeInTheDocument();
    expect(screen.getByText('No bloat, no waste. Just focused, strategic execution.')).toBeInTheDocument();
    expect(screen.getByText('We treat your budget like it\'s our own — because we care about the outcome.')).toBeInTheDocument();
  });

  it('preserves URL placeholders correctly', () => {
    render(<ValuesGrid />);

    const images = screen.getAllByAltText('');
    images.forEach(img => {
      expect(img).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/21c32a7ebf8839b9a97d572883740874645aa2c8?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9');
    });
  });
});
