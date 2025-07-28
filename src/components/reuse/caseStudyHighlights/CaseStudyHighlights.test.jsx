import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CaseStudyHighlights } from './CaseStudyHighlights';
import { SectionHeader } from './caseStudyHighComp/SectionHeader';
import { CaseStudyCard } from './caseStudyHighComp/CaseStudyCard';
import { Tag } from './caseStudyHighComp/Tag';
import { ReadMoreButton } from './caseStudyHighComp/ReadMoreButton';

describe('CaseStudiesSection', () => {
  it('renders the main section with correct structure', () => {
    render(<CaseStudyHighlights />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Our Success Stories')).toBeInTheDocument();
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getAllByText('Read More')).toHaveLength(3);
  });

  it('renders all three case study cards', () => {
    render(<CaseStudyHighlights />);

    expect(screen.getByText('How we scaled a SaaS brand by 300% in 3 months')).toBeInTheDocument();
    expect(screen.getByText('From messy data to measurable growth')).toBeInTheDocument();
    expect(screen.getByText('Cutting CPA in half for a scaling eCommerce store')).toBeInTheDocument();
  });

  it('has correct background color and layout classes', () => {
    const { container } = render(<CaseStudyHighlights />);
    const section = container.querySelector('section');

    expect(section).toHaveClass('bg-zinc-900');
    expect(section).toHaveClass('flex');
    expect(section).toHaveClass('flex-col');
  });
});

describe('SectionHeader', () => {
  it('renders the tagline, heading, and description', () => {
    render(<SectionHeader />);

    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getByText('Our Success Stories')).toBeInTheDocument();
    expect(screen.getByText(/87\+ clients\. 10\+ years specialising/)).toBeInTheDocument();
  });

  it('uses semantic HTML elements', () => {
    render(<SectionHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

describe('CaseStudyCard', () => {
  const mockProps = {
    imageUrl: 'test-image.jpg',
    title: 'Test Case Study',
    description: 'Test description',
    onReadMore: vi.fn(),
  };

  it('renders card content correctly', () => {
    render(<CaseStudyCard {...mockProps} />);

    expect(screen.getByText('Test Case Study')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Google Ads')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  it('calls onReadMore when Read More button is clicked', () => {
    render(<CaseStudyCard {...mockProps} />);

    const readMoreButton = screen.getByText('Read More').closest('button');
    fireEvent.click(readMoreButton);

    expect(mockProps.onReadMore).toHaveBeenCalledTimes(1);
  });

  it('uses semantic article element', () => {
    render(<CaseStudyCard {...mockProps} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('renders image with correct src', () => {
    render(<CaseStudyCard {...mockProps} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });
});

describe('Tag', () => {
  it('renders tag content', () => {
    render(<Tag>Google Ads</Tag>);

    expect(screen.getByText('Google Ads')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<Tag>Test Tag</Tag>);
    const tagElement = container.firstChild;

    expect(tagElement).toHaveClass('bg-emerald-900');
    expect(tagElement).toHaveClass('rounded-sm');
  });
});

describe('ReadMoreButton', () => {
  it('renders button text and calls onClick', () => {
    const mockOnClick = vi.fn();
    render(<ReadMoreButton onClick={mockOnClick} />);

    const button = screen.getByText('Read More').closest('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('contains chevron icon', () => {
    render(<ReadMoreButton onClick={vi.fn()} />);

    const button = screen.getByText('Read More').closest('button');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
