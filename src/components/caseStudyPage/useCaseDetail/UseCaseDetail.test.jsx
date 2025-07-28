import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UseCaseDetail from './UseCaseDetail';

describe('Content28', () => {
  it('renders the main heading', () => {
    render(<UseCaseDetail />);
    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).toBeInTheDocument();
  });

  it('renders all section headings', () => {
    render(<UseCaseDetail />);
    expect(screen.getByRole('heading', { name: 'Key Challenges' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'What We Did' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The Results' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About the Project' })).toBeInTheDocument();
  });

  it('renders the project sidebar with correct details', () => {
    render(<UseCaseDetail />);
    expect(screen.getByText('Service')).toBeInTheDocument();
    expect(screen.getByText('Paid Media & Analytics')).toBeInTheDocument();
    expect(screen.getByText('Client')).toBeInTheDocument();
    expect(screen.getByText('XYZ Ltd.')).toBeInTheDocument();
    expect(screen.getByText('Industry')).toBeInTheDocument();
    expect(screen.getByText('B2B SaaS')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('London, United Kingdom')).toBeInTheDocument();
  });

  it('renders challenge list items', () => {
    render(<UseCaseDetail />);
    expect(screen.getByText('Inconsistent tracking and missing conversion events')).toBeInTheDocument();
    expect(screen.getByText('Unstructured campaigns with overlapping targeting')).toBeInTheDocument();
    expect(screen.getByText('Poor visibility into performance and return')).toBeInTheDocument();
  });

  it('renders solution list items', () => {
    render(<UseCaseDetail />);
    expect(screen.getByText('Consolidated and restructured campaigns across Google & Meta')).toBeInTheDocument();
    expect(screen.getByText('Implemented server-side tracking and GA4 event tagging')).toBeInTheDocument();
    expect(screen.getByText('Created a custom Looker Studio dashboard for real-time clarity')).toBeInTheDocument();
    expect(screen.getByText('Introduced A/B testing and expanded into new audience segments')).toBeInTheDocument();
  });

  it('renders quote blocks', () => {
    render(<UseCaseDetail />);
    expect(screen.getByText(/Tristique odio senectus nam posuere/)).toBeInTheDocument();
    expect(screen.getByText(/Ipsum sit mattis nulla quam nulla/)).toBeInTheDocument();
  });

  it('renders image with caption', () => {
    render(<UseCaseDetail />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/c157349ddd0a96e485a2b27bd51374926b5271f5?width=1510');
    expect(screen.getByText('Image caption goes here')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<UseCaseDetail />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('complementary')).toBeInTheDocument();
    expect(screen.getAllByRole('list')).toHaveLength(2);
  });

  it('applies correct CSS classes for responsive design', () => {
    const { container } = render(<UseCaseDetail />);
    const section = container.firstChild;
    expect(section).toHaveClass('max-md:gap-16', 'max-md:px-8', 'max-md:py-16', 'max-md:w-full');
    expect(section).toHaveClass('max-sm:gap-10', 'max-sm:px-4', 'max-sm:py-10');
  });
});
