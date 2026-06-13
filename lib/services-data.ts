import { services as baseServices, type ServiceSlug } from './site-content'

export type ServiceDetail = {
  slug: ServiceSlug
  title: string
  description: string
  imageSrc: string
  tags: string[]
  popupDetails: {
    overview: string
    deliverables: string[]
  }
}

const detailMap: Record<ServiceSlug, Omit<ServiceDetail, 'slug' | 'title' | 'description' | 'imageSrc'>> = {
  'survey-management': {
    tags: ['Data Capture', 'Dashboards'],
    popupDetails: {
      overview:
        'Survey architecture engineered to reduce manual capture errors with secure pipelines parsing distributed telemetry points.',
      deliverables: ['Real-time validation engine', 'Custom analytical dashboards', 'Offline-first client apps'],
    },
  },
  'gis-solutions': {
    tags: ['Mapping', 'Geospatial'],
    popupDetails: {
      overview:
        'Enterprise mapping layers with spatial indexing and polygon processing for smooth geographical data rendering.',
      deliverables: ['Multi-layer asset topology', 'High-density raster rendering', 'Custom spatial geoprocessors'],
    },
  },
  'software-development': {
    tags: ['Web', 'Cloud'],
    popupDetails: {
      overview:
        'Resilient cloud-native architectures optimized for elasticity, zero-downtime deployments, and high availability.',
      deliverables: ['Microservices integration', 'GraphQL/REST APIs', 'Cloud automation architectures'],
    },
  },
  'training-programs': {
    tags: ['LMS', 'Workshops'],
    popupDetails: {
      overview: 'Tailored curriculum designs that empower in-house teams to operate modern frameworks with precision.',
      deliverables: ['Custom learning environments', 'Hands-on technical classrooms', 'Operational documentation'],
    },
  },
  'sbm-services': {
    tags: ['Strategy', 'Automation'],
    popupDetails: {
      overview: 'Solutions for governmental sanitation structures scaling into digital reporting portals.',
      deliverables: ['Field waste monitoring', 'Resource routing automation', 'Public health analytics'],
    },
  },
  'consulting-services': {
    tags: ['Advisory', 'Architecture'],
    popupDetails: {
      overview: 'Strategic advisory assessing legacy blockages and aligning structures to secure future layouts.',
      deliverables: ['Security & auditing scales', 'Data governance playbooks', 'Technology roadmap timelines'],
    },
  },
  'outsourcing-manpower': {
    tags: ['ManPower', 'Outsourcing'],
    popupDetails: {
      overview: 'Flexible workforce blueprints helping enterprises scale through on-demand staffing pipelines.',
      deliverables: ['Vetted talent deployment', 'Workforce scheduling modules', 'Productivity analytics'],
    },
  },
}

export const serviceDetails: ServiceDetail[] = baseServices.map(s => ({
  slug: s.slug,
  title: s.title,
  description: s.shortDescription,
  imageSrc: s.image,
  ...detailMap[s.slug],
}))

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'We map your goals, data, and constraints to define the right outcomes.',
    imageSrc: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Architecture, UX, and delivery plan tailored to your enterprise.',
    imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '03',
    title: 'Deliver',
    description: 'Agile build and rollout with measurable milestones.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '04',
    title: 'Support',
    description: 'Ongoing optimization, training, and SLA-backed support.',
    imageSrc: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
  },
] as const
