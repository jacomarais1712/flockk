import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from './FAQ';
import FAQHeader from './faqComp/FAQHeader';
import FAQAccordion from './faqComp/FAQAccordion';
import AccordionItem from './faqComp/AccordionItem';
import Button from './faqComp/Button';

describe('FAQ Component', () => {
  it('renders the main FAQ component', () => {
    render(<FAQ />);
    expect(screen.getByText('Have any Questions?')).toBeInTheDocument();
    expect(screen.getByText('Find answers to common questions about our pricing and services here 👉')).toBeInTheDocument();
  });

  it('renders both header and accordion sections', () => {
    render(<FAQ />);
    expect(screen.getByText('Send Us A Message')).toBeInTheDocument();
    expect(screen.getByText("What's included in your packages?")).toBeInTheDocument();
  });
});

describe('FAQHeader Component', () => {
  it('renders the header with correct content', () => {
    render(<FAQHeader />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Have any Questions?');
    expect(screen.getByText('Still have questions or not convinced yet?')).toBeInTheDocument();
  });

  it('renders the message button', () => {
    render(<FAQHeader />);
    expect(screen.getByRole('button', { name: /send us a message/i })).toBeInTheDocument();
  });
});

describe('Button Component', () => {
  it('renders button with correct text and icon', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Send Us A Message');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('has correct styling classes', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('flex', 'relative', 'gap-3', 'justify-center', 'items-center');
  });
});

describe('FAQAccordion Component', () => {
  it('renders all FAQ items', () => {
    render(<FAQAccordion />);
    expect(screen.getByText("What's included in your packages?")).toBeInTheDocument();
    expect(screen.getByText("How do you track campaign performance?")).toBeInTheDocument();
    expect(screen.getByText("Can you manage both Google and Meta Ads?")).toBeInTheDocument();
    expect(screen.getByText("What industries do you work with?")).toBeInTheDocument();
    expect(screen.getByText("What's the typical turnaround time for results?")).toBeInTheDocument();
  });

  it('has first item open by default', () => {
    render(<FAQAccordion />);
    expect(screen.getByText(/Our pricing packages include comprehensive analytics/)).toBeInTheDocument();
  });

  it('toggles accordion items when clicked', () => {
    render(<FAQAccordion />);
    const secondQuestion = screen.getByText("How do you track campaign performance?");

    // Initially closed
    expect(screen.queryByText(/We use advanced analytics tools/)).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(secondQuestion);
    expect(screen.getByText(/We use advanced analytics tools/)).toBeInTheDocument();

    // Click to close
    fireEvent.click(secondQuestion);
    expect(screen.queryByText(/We use advanced analytics tools/)).not.toBeInTheDocument();
  });
});

describe('AccordionItem Component', () => {
  const mockProps = {
    question: "Test question?",
    answer: "Test answer content",
    isOpen: false,
    onToggle: vi.fn()
  };

  it('renders question text', () => {
    render(<AccordionItem {...mockProps} />);
    expect(screen.getByText('Test question?')).toBeInTheDocument();
  });

  it('does not show answer when closed', () => {
    render(<AccordionItem {...mockProps} />);
    expect(screen.queryByText('Test answer content')).not.toBeInTheDocument();
  });

  it('shows answer when open', () => {
    render(<AccordionItem {...mockProps} isOpen={true} />);
    expect(screen.getByText('Test answer content')).toBeInTheDocument();
  });

  it('calls onToggle when clicked', () => {
    const mockToggle = vi.fn();
    render(<AccordionItem {...mockProps} onToggle={mockToggle} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('has correct aria attributes', () => {
    render(<AccordionItem {...mockProps} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls');
  });

  it('shows correct icon based on open state', () => {
    const { rerender } = render(<AccordionItem {...mockProps} isOpen={false} />);
    expect(document.querySelector('.arrow-down-icon')).toBeInTheDocument();

    rerender(<AccordionItem {...mockProps} isOpen={true} />);
    expect(document.querySelector('.arrow-up-icon')).toBeInTheDocument();
  });
});

describe('Accessibility', () => {
  it('has proper semantic structure', () => {
    render(<FAQ />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(6); // 1 message button + 5 accordion buttons
  });

  it('accordion items have proper ARIA attributes', () => {
    render(<FAQAccordion />);
    const buttons = screen.getAllByRole('button').slice(1); // Skip the message button

    buttons.forEach(button => {
      expect(button).toHaveAttribute('aria-expanded');
      expect(button).toHaveAttribute('aria-controls');
    });
  });
});

describe('Responsive Design', () => {
  it('applies responsive classes correctly', () => {
    render(<FAQ />);
    const section = document.querySelector('section');
    expect(section).toHaveClass('max-md:gap-16', 'max-md:px-8', 'max-sm:gap-10', 'max-sm:px-4');
  });
});
