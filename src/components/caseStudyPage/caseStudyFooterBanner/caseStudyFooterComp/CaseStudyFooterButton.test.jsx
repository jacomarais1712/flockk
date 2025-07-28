import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CaseStudyFooterButton } from './CaseStudyFooterButton';

describe('CaseStudyFooterButton', () => {
  it('renders with default text', () => {
    render(<CaseStudyFooterButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Let's Talk");
  });

  it('renders with custom text', () => {
    render(<CaseStudyFooterButton>Custom Text</CaseStudyFooterButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Custom Text');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<CaseStudyFooterButton onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<CaseStudyFooterButton className="custom-class" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('contains the arrow icon SVG', () => {
    render(<CaseStudyFooterButton />);

    const button = screen.getByRole('button');
    const svgContainer = button.querySelector('div[dangerouslySetInnerHTML]');
    expect(svgContainer).toBeInTheDocument();
  });

  it('has correct responsive classes', () => {
    render(<CaseStudyFooterButton />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('max-sm:gap-2', 'max-sm:py-2');
  });

  it('passes through additional props', () => {
    render(<CaseStudyFooterButton data-testid="cta-button" />);

    const button = screen.getByTestId('cta-button');
    expect(button).toBeInTheDocument();
  });

  it('has correct button styling classes', () => {
    render(<CaseStudyFooterButton />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'flex',
      'gap-3',
      'justify-center',
      'items-center',
      'transition-all',
      'cursor-pointer'
    );
  });
});
