import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CaseStudyFooterContent } from './CaseStudyFooterContent';

describe('CaseStudyFooterContent', () => {
  it('renders with default content', () => {
    render(<CaseStudyFooterContent />);

    const heading = screen.getByRole('heading', { level: 1 });
    const description = screen.getByText('Get data-backed growth strategies that actually move the needle.');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Ready To Create Your Own Success Story?');
    expect(description).toBeInTheDocument();
  });

  it('renders with custom heading', () => {
    render(<CaseStudyFooterContent heading="Custom Heading" />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Custom Heading');
  });

  it('renders with custom description', () => {
    render(<CaseStudyFooterContent description="Custom description text" />);

    const description = screen.getByText('Custom description text');
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('P');
  });

  it('applies custom heading className', () => {
    render(<CaseStudyFooterContent headingClassName="custom-heading-class" />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('custom-heading-class');
  });

  it('applies custom description className', () => {
    render(<CaseStudyFooterContent descriptionClassName="custom-description-class" />);

    const description = screen.getByText('Get data-backed growth strategies that actually move the needle.');
    expect(description).toHaveClass('custom-description-class');
  });

  it('has correct responsive classes on heading', () => {
    render(<CaseStudyFooterContent />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass(
      'max-md:text-4xl',
      'max-md:leading-10',
      'max-sm:text-3xl',
      'max-sm:tracking-normal',
      'max-sm:leading-8'
    );
  });

  it('has correct responsive classes on description', () => {
    render(<CaseStudyFooterContent />);

    const description = screen.getByText('Get data-backed growth strategies that actually move the needle.');
    expect(description).toHaveClass(
      'max-md:text-lg',
      'max-sm:text-base',
      'max-sm:leading-6'
    );
  });

  it('has correct text styling classes', () => {
    render(<CaseStudyFooterContent />);

    const heading = screen.getByRole('heading', { level: 1 });
    const description = screen.getByText('Get data-backed growth strategies that actually move the needle.');

    expect(heading).toHaveClass('text-zinc-200', 'font-bold', 'text-center');
    expect(description).toHaveClass('text-zinc-200', 'text-center', 'tracking-wide');
  });

  it('has correct container structure', () => {
    render(<CaseStudyFooterContent />);

    const container = screen.getByRole('heading', { level: 1 }).parentElement;
    expect(container).toHaveClass('flex', 'flex-col', 'gap-5', 'items-center', 'w-full');
  });
});
