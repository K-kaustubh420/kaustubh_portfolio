export interface Social {
  platform: string;
  url: string;
}

export interface NavLink {
  label: string;
  url: string;
}

export interface PortfolioData {
  brand: string;
  firstName: string;
  lastName: string;
  roles: string[];
  socials: Social[];
  navLinks: NavLink[];
  heroImage: string;
}