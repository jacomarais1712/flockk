import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CaseStudies } from './CaseStudies';
import { CaseStudyCard } from './successStoriesComp/CaseStudyCard';
import { Tag } from './successStoriesComp/Tag';
import { ReadMoreButton } from './successStoriesComp/ReadMoreButton';

// Mock console.log to avoid noise in tests
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('CaseStudies', () => {
  it('renders the main heading', () => {
    render(<CaseStudies />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Our Success Stories');
  });

  it('renders the tagline', () => {
    render(<CaseStudies />);
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<CaseStudies />);
    expect(screen.getByText(/87\+ clients\. 10\+ years specialising/)).toBeInTheDocument();
  });

  it('renders three case study cards', () => {
    render(<CaseStudies />);
    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(3);
  });

  it('includes the Google Fonts link', () => {
    render(<CaseStudies />);
    const link = document.querySelector('link[href*="fonts.googleapis.com"]');
    expect(link).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<CaseStudies />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // header
    expect(screen.getByRole('region')).toBeInTheDocument(); // section
  });
});

describe('CaseStudyCard', () => {
  const mockProps = {
    imageUrl: 'test-image.jpg',
    tags: ['Google Ads', 'Analytics'],
    title: 'Test Case Study',
    description: 'Test description',
    onReadMore: vi.fn()
  };

  it('renders the card with all content', () => {
    render(<CaseStudyCard {...mockProps} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Case Study');
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Google Ads')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  it('renders the image with correct attributes', () => {
    render(<CaseStudyCard {...mockProps} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-image.jpg');
    expect(image).toHaveClass('h-[300px]');
  });

  it('calls onReadMore when Read More button is clicked', () => {
    render(<CaseStudyCard {...mockProps} />);
    const readMoreButton = screen.getByRole('button', { name: /read more/i });
    fireEvent.click(readMoreButton);
    expect(mockProps.onReadMore).toHaveBeenCalledTimes(1);
  });

  it('renders logo SVG when provided', () => {
    const propsWithLogo = {
      ...mockProps,
      logoSvg: '<svg><circle r="10"/></svg>',
      logoPosition: { right: '90px', bottom: '88px' }
    };
    render(<CaseStudyCard {...propsWithLogo} />);

    const logoContainer = document.querySelector('div[style*="position: absolute"]');
    expect(logoContainer).toBeInTheDocument();
  });

  it('uses custom read time when provided', () => {
    render(<CaseStudyCard {...mockProps} readTime="3 min read" />);
    expect(screen.getByText('3 min read')).toBeInTheDocument();
  });
});

describe('Tag', () => {
  it('renders tag content', () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Tag className="custom-class">Test Tag</Tag>);
    const tag = screen.getByText('Test Tag').parentElement;
    expect(tag).toHaveClass('custom-class');
  });

  it('has correct styling classes', () => {
    render(<Tag>Test Tag</Tag>);
    const tag = screen.getByText('Test Tag').parentElement;
    expect(tag).toHaveClass('bg-emerald-900', 'rounded-sm', 'px-2.5', 'py-1.5');
  });
});

describe('ReadMoreButton', () => {
  it('renders button with correct text', () => {
    const mockOnClick = vi.fn();
    render(<ReadMoreButton onClick={mockOnClick} />);
    expect(screen.getByRole('button', { name: /read more/i })).toBeInTheDocument();
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockOnClick = vi.fn();
    render(<ReadMoreButton onClick={mockOnClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('includes chevron icon', () => {
    render(<ReadMoreButton onClick={vi.fn()} />);
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('applies custom className', () => {
    render(<ReadMoreButton onClick={vi.fn()} className="custom-button" />);
    const buttonContainer = screen.getByRole('button').closest('div');
    expect(buttonContainer).toHaveClass('custom-button');
  });

  it('has proper accessibility attributes', () => {
    render(<ReadMoreButton onClick={vi.fn()} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Read more about this case study');
  });
});

describe('Integration Tests', () => {
  it('handles read more clicks for all cards', () => {
    render(<CaseStudies />);
    const readMoreButtons = screen.getAllByRole('button', { name: /read more/i });

    readMoreButtons.forEach((button, index) => {
      fireEvent.click(button);
    });

    // Should have logged 3 times (once for each card)
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });

  it('renders responsive classes', () => {
    render(<CaseStudies />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('max-md:gap-16', 'max-sm:gap-10');
  });

  it('maintains proper heading hierarchy', () => {
    render(<CaseStudies />);
    const h1 = screen.getByRole('heading', { level: 1 });
    const h3s = screen.getAllByRole('heading', { level: 3 });

    expect(h1).toBeInTheDocument();
    expect(h3s).toHaveLength(3); // One for each case study card
  });
});
