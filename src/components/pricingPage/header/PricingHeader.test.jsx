import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PricingHeader from './PricingHeader';
import { PricingTag } from './ricingPageComp/PricingTag';
import { HeaderContent } from './pricingPageComp/HeaderContent';
import { SectionTitle } from './ricingPageComp/SectionTitle';

describe('PricingHeader', () => {
  it('renders the main header component', () => {
    render(<PricingHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('PRICING')).toBeInTheDocument();
    expect(screen.getByText('Transparent Plans. Expert Support. Clear Results.')).toBeInTheDocument();
    expect(screen.getByText("Whether you're just getting started or scaling aggressively, we've got a plan built for your goals.")).toBeInTheDocument();
  });

  it('has correct styling classes for responsive design', () => {
    render(<PricingHeader />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-black', 'px-16', 'py-20', 'max-md:px-8', 'max-md:py-16', 'max-sm:px-5', 'max-sm:py-10');
  });

  it('uses semantic HTML structure', () => {
    render(<PricingHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

describe('PricingTag', () => {
  it('renders children content', () => {
    render(<PricingTag>TEST TAG</PricingTag>);

    expect(screen.getByText('TEST TAG')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(<PricingTag>TEST</PricingTag>);

    const tag = screen.getByText('TEST');
    expect(tag).toHaveClass('text-emerald-400', 'uppercase', 'font-bold');
  });

  it('accepts custom className prop', () => {
    render(<PricingTag className="custom-class">TEST</PricingTag>);

    const container = screen.getByText('TEST').parentElement;
    expect(container).toHaveClass('custom-class');
  });
});

describe('HeaderContent', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test description content'
  };

  it('renders title and description', () => {
    render(<HeaderContent {...mockProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description content')).toBeInTheDocument();
  });

  it('renders title as h1 element', () => {
    render(<HeaderContent {...mockProps} />);

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('renders description as paragraph element', () => {
    render(<HeaderContent {...mockProps} />);

    const description = screen.getByText('Test description content');
    expect(description.tagName).toBe('P');
  });

  it('applies responsive typography classes', () => {
    render(<HeaderContent {...mockProps} />);

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveClass('text-6xl', 'max-md:text-5xl', 'max-sm:text-3xl');

    const description = screen.getByText('Test description content');
    expect(description).toHaveClass('text-xl', 'max-md:text-lg', 'max-sm:text-base');
  });
});

describe('SectionTitle', () => {
  const mockProps = {
    tagline: 'TEST TAGLINE',
    title: 'Test Section Title',
    description: 'Test section description'
  };

  it('renders all props correctly', () => {
    render(<SectionTitle {...mockProps} />);

    expect(screen.getByText('TEST TAGLINE')).toBeInTheDocument();
    expect(screen.getByText('Test Section Title')).toBeInTheDocument();
    expect(screen.getByText('Test section description')).toBeInTheDocument();
  });

  it('uses section semantic element', () => {
    render(<SectionTitle {...mockProps} />);

    const section = screen.getByRole('region');
    expect(section.tagName).toBe('SECTION');
  });

  it('maintains proper component composition', () => {
    render(<SectionTitle {...mockProps} />);

    // Verify PricingTag is rendered
    expect(screen.getByText('TEST TAGLINE')).toHaveClass('text-emerald-400');

    // Verify HeaderContent is rendered
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Section Title');
  });
});

describe('Integration Tests', () => {
  it('renders complete component hierarchy', () => {
    render(<PricingHeader />);

    // Test the full component tree
    const header = screen.getByRole('banner');
    const section = screen.getByRole('region');
    const heading = screen.getByRole('heading', { level: 1 });

    expect(header).toContainElement(section);
    expect(section).toContainElement(heading);
  });

  it('maintains responsive design across all breakpoints', () => {
    render(<PricingHeader />);

    const header = screen.getByRole('banner');
    const container = header.firstChild;
    const heading = screen.getByRole('heading', { level: 1 });

    // Check responsive classes are applied at different levels
    expect(header).toHaveClass('max-md:px-8', 'max-sm:px-5');
    expect(container).toHaveClass('max-md:w-full', 'max-sm:gap-6');
    expect(heading).toHaveClass('max-md:text-5xl', 'max-sm:text-3xl');
  });

  it('preserves exact content from design', () => {
    render(<PricingHeader />);

    expect(screen.getByText('PRICING')).toBeInTheDocument();
    expect(screen.getByText('Transparent Plans. Expert Support. Clear Results.')).toBeInTheDocument();
    expect(screen.getByText("Whether you're just getting started or scaling aggressively, we've got a plan built for your goals.")).toBeInTheDocument();
  });
});
