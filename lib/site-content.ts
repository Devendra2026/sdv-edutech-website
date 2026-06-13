export const siteConfig = {
  name: 'SDV EDUTECH',
  legalName: 'Sdv Edutech Private Limited',
  url: 'https://sdvedutech.in',
  email: 'info@sdvedutech.in',
  phone: '+91 90278 11488',
  address: '01, FF, STPI, IT Park, Sector-D, Shahstripuram, Sikandra, Agra, Uttar Pradesh, India - 282007',
  logo: '/logo.png',
  heroImage: '/images/hero-consulting.jpg',
} as const

export const companyStats = {
  yearsExperience: '5+',
  enterpriseClients: '100+',
  projectsDelivered: '100+',
  employees: '150+',
  clients: '50+',
} as const

export const heroStats = [
  { value: companyStats.enterpriseClients, label: 'Enterprise clients' },
  { value: companyStats.projectsDelivered, label: 'Projects delivered' },
  { value: companyStats.yearsExperience, label: 'Years of excellence' },
] as const

export const aboutStats = [
  { value: companyStats.employees, label: 'Employees' },
  { value: companyStats.projectsDelivered, label: 'Projects' },
  { value: companyStats.clients, label: 'Clients' },
  { value: companyStats.yearsExperience, label: 'Years experience' },
] as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Clients', href: '/clients' },
  { label: 'Careers', href: '/careers' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const

export type ServiceSlug =
  | 'survey-management'
  | 'gis-solutions'
  | 'software-development'
  | 'training-programs'
  | 'sbm-services'
  | 'consulting-services'
  | 'outsourcing-manpower'

export const services = [
  {
    slug: 'survey-management' as const,
    title: 'Survey Management',
    shortDescription:
      'Advanced survey solutions for data collection, cross-platform analysis, and actionable asset insights.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'gis-solutions' as const,
    title: 'GIS Solutions',
    shortDescription:
      'Geographic Information Systems built for robust spatial rendering, geodatabase management, and layering.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'software-development' as const,
    title: 'Software Development',
    shortDescription: 'Custom enterprise software and clean microservice ecosystems tailored to your workflow needs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'training-programs' as const,
    title: 'Training Programs',
    shortDescription:
      'Comprehensive educational infrastructure, tracking metrics, and professional tech skill pathways.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'sbm-services' as const,
    title: 'SBM Services',
    shortDescription: 'Water management structures, clean city programs, and smart government compliance networks.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'consulting-services' as const,
    title: 'Consulting Services',
    shortDescription: 'Strategic analysis, system architectural blueprints, and technology risk mitigation models.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'outsourcing-manpower' as const,
    title: 'Outsourcing & ManPower Services',
    shortDescription: 'Vetted talent deployment, workforce scheduling, and operational productivity analytics.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
  },
] as const

export function serviceHref(slug: ServiceSlug): string {
  return `/services#${slug}`
}

export const footerServiceLinks = services.map(s => ({
  label: s.title,
  href: serviceHref(s.slug),
}))

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/sdv-edutech',
  twitter: 'https://twitter.com/sdvedutech',
  instagram: 'https://www.instagram.com/sdvedutech',
  whatsapp: 'https://wa.me/919027811488',
} as const

export const certificates = [
  {
    title: 'ISO Certification',
    image: 'https://sdvedutech.com/public/site_setting_img/1751610210.jpeg',
  },
  {
    title: 'Quality Excellence',
    image: 'https://sdvedutech.com/public/site_setting_img/1751609872.jpeg',
  },
  {
    title: 'Industry Recognition',
    image: 'https://sdvedutech.com/public/site_setting_img/1751608455.jpeg',
  },
  {
    title: 'Government Partner',
    image: 'https://sdvedutech.com/public/site_setting_img/1751608295.jpeg',
  },
  {
    title: 'MSME Certified',
    image: 'https://sdvedutech.com/public/site_setting_img/1751537543.jpeg',
  },
  {
    title: 'Enterprise Partner',
    image: 'https://sdvedutech.com/public/site_setting_img/1751537464.jpeg',
  },
  {
    title: 'Technology Leader',
    image: 'https://sdvedutech.com/public/site_setting_img/1751537138.jpeg',
  },
] as const

export const galleryImages = [
  { image: 'https://sdvedutech.com/public/site_setting_img/1751533990.jpeg', title: 'Project showcase 1' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751535131.jpeg', title: 'Project showcase 2' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751535503.jpeg', title: 'Project showcase 3' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751537709.jpeg', title: 'Project showcase 4' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751612460.jpeg', title: 'Project showcase 5' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751612517.jpeg', title: 'Project showcase 6' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751612545.jpeg', title: 'Project showcase 7' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751612613.jpeg', title: 'Project showcase 8' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751612630.jpeg', title: 'Project showcase 9' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751613787.jpeg', title: 'Project showcase 10' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751625792.jpeg', title: 'Project showcase 11' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751625808.jpeg', title: 'Project showcase 12' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751625985.jpeg', title: 'Project showcase 13' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751626415.jpeg', title: 'Project showcase 14' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1751627280.jpeg', title: 'Project showcase 15' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1755257001.jpeg', title: 'Project showcase 16' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1756969712.jpeg', title: 'Project showcase 17' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1756969757.jpeg', title: 'Project showcase 18' },
  { image: 'https://sdvedutech.com/public/site_setting_img/1756969787.jpeg', title: 'Project showcase 19' },
] as const

export const heroCopy = {
  badge: `${companyStats.yearsExperience} Years Excellence`,
  headline: 'Innovative IT Solutions',
  description:
    'Sdv Edutech delivers AI-powered software, GIS & drone surveying, data digitization, enterprise integration, DPR & PMC consultancy, and skill development for government and corporate clients.',
} as const
