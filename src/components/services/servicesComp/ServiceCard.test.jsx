import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ServiceCard from './ServiceCard';

const mockProps = {
  icon: '<svg><circle r="10" fill="red"/></svg>',
  title: 'Test Service',
  description: 'Test description for the service',
  onLearnMore: vi.fn()
};

describe('ServiceCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<ServiceCard {...mockProps} />);
    expect(screen.getByText('Test Service')).toBeInTheDocument();
  });

  it('displays the correct title and description', () => {
    render(<ServiceCard {...mockProps} />);
    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test description for the service')).toBeInTheDocument();
  });

  it('renders the icon using dangerouslySetInnerHTML', () => {
    const { container } = render(<ServiceCard {...mockProps} />);
    const iconContainer = container.querySelector('div[dangerouslySetInnerHTML]');
    expect(iconContainer).toBeInTheDocument();
  });

  it('calls onLearnMore when Learn More button is clicked', () => {
    render(<ServiceCard {...mockProps} />);
    const learnMoreButton = screen.getByRole('button', { name: /learn more about test service/i });
    fireEvent.click(learnMoreButton);
    expect(mockProps.onLearnMore).toHaveBeenCalledTimes(1);
  });

  it('has proper semantic structure with article element', () => {
    const { container } = render(<ServiceCard {...mockProps} />);
    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
  });

  it('has proper heading hierarchy with h3', () => {
    render(<ServiceCard {...mockProps} />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('Test Service');
  });

  it('has accessible button with aria-label', () => {
    render(<ServiceCard {...mockProps} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Learn more about Test Service');
  });

  it('applies correct CSS classes for styling', () => {
    const { container } = render(<ServiceCard {...mockProps} />);
    const article = container.querySelector('article');
    expect(article).toHaveClass('flex', 'flex-col', 'gap-12', 'rounded-lg', 'backdrop-blur-[20px]');
  });

  it('applies responsive classes correctly', () => {
    const { container } = render(<ServiceCard {...mockProps} />);
    const article = container.querySelector('article');
    expect(article).toHaveClass('max-md:gap-9', 'max-sm:gap-6');
  });
});
