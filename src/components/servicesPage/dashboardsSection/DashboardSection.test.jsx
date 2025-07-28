import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DashboardSection from './DashboardSection';
import { DashboardHero } from './dashboardsSectionComp/DashboardHero';
import { ServicesList } from './dashboardsSectionComp/ServicesList';
import { CheckIcon } from './dashboardsSectionComp/CheckIcon';

describe('Layout209', () => {
  it('renders the main component without crashing', () => {
    render(<DashboardSection />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays the main heading', () => {
    render(<DashboardSection />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Custom Looker Studio Dashboards & Reporting'
    );
  });

  it('displays the subtitle', () => {
    render(<DashboardSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Clear, Automated, Decision-Ready Dashboards'
    );
  });

  it('displays the description paragraph', () => {
    render(<DashboardSection />);
    expect(screen.getByText(/We use Looker Studio to build powerful/)).toBeInTheDocument();
  });

  it('displays dashboard interface image', () => {
    render(<DashboardSection />);
    expect(screen.getByAltText('Dashboard interface')).toBeInTheDocument();
  });

  it('displays mobile dashboard image', () => {
    render(<DashboardSection />);
    expect(screen.getByAltText('Mobile dashboard')).toBeInTheDocument();
  });
});

describe('DashboardHero', () => {
  it('renders hero content section', () => {
    render(<DashboardHero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('includes services list section', () => {
    render(<DashboardHero />);
    expect(screen.getByText('What we can help you with:')).toBeInTheDocument();
  });
});

describe('ServicesList', () => {
  it('renders all service items', () => {
    render(<ServicesList />);

    const services = [
      'Weekly or monthly performance dashboards',
      'Live spend and budget pacing reports',
      'Breakdown by campaign, location, keyword, or conversion source',
      'CRM data overlays',
      'Client-friendly views with no fluff'
    ];

    services.forEach(service => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });
  });

  it('renders service items as list', () => {
    render(<ServicesList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });

  it('displays section heading', () => {
    render(<ServicesList />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'What we can help you with:'
    );
  });
});

describe('CheckIcon', () => {
  it('renders check icon SVG', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('check-icon');
  });
});
