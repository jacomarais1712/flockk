import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CompanyLogo from './CompanyLogo';

describe('CompanyLogo', () => {
  it('renders the SVG logo correctly', () => {
    render(<CompanyLogo />);

    const logo = screen.getByRole('img', { hidden: true });
    expect(logo).toBeInTheDocument();
  });

  it('has correct SVG attributes', () => {
    render(<CompanyLogo />);

    const logo = screen.getByRole('img', { hidden: true });
    expect(logo).toHaveAttribute('width', '320');
    expect(logo).toHaveAttribute('height', '164');
    expect(logo).toHaveAttribute('viewBox', '0 0 320 164');
    expect(logo).toHaveAttribute('fill', 'none');
  });

  it('applies correct styling', () => {
    render(<CompanyLogo />);

    const logo = screen.getByRole('img', { hidden: true });
    expect(logo).toHaveClass('logo-svg');
    expect(logo).toHaveStyle({
      width: '320px',
      height: '163px',
      flexShrink: '0',
      position: 'relative'
    });
  });

  it('contains the expected number of path elements', () => {
    render(<CompanyLogo />);

    const container = screen.getByRole('img', { hidden: true }).parentElement;
    const paths = container.querySelectorAll('path');
    expect(paths).toHaveLength(12);
  });

  it('has paths with correct fill color', () => {
    render(<CompanyLogo />);

    const container = screen.getByRole('img', { hidden: true }).parentElement;
    const paths = container.querySelectorAll('path');

    paths.forEach(path => {
      expect(path).toHaveAttribute('fill', '#E3E7E8');
    });
  });
});
