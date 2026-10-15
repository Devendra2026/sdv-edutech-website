import { ArrowUpRight, Award, Globe, MapPin, Users } from 'lucide-react';
import WhoHeading from './WhoHeading';

const stats = [
  { value: '150+', label: 'Employees' },
  { value: '100+', label: 'Projects' },
  { value: '50+', label: 'Clients' },
  { value: '4+', label: 'Years experience' },
];

const features = [
  {
    icon: Award,
    title: 'MSME Certified',
    description:
      'Recognized as a registered MSME, ensuring compliance, credibility, and quality-driven service delivery.',
  },
  {
    icon: Globe,
    title: 'PAN India Presence',
    description:
      'Extensive service coverage across India with experience in government, corporate, and institutional projects.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Highly skilled professionals delivering reliable, scalable, and innovative technology solutions.',
  },
];

export default function WhoWeAre() {
  return (
    <section className="who-section" aria-labelledby="who-heading">
      <div className="who-background-orb who-background-orb-blue" aria-hidden="true" />
      <div className="who-background-orb who-background-orb-red" aria-hidden="true" />

      <div className="who-container">
        <div className="who-kicker-row">
          <span className="who-kicker"><span /> WHO WE ARE</span>
          <span className="who-location"><MapPin size={15} aria-hidden="true" /> Agra, India</span>
        </div>

        <div className="who-intro">
          <div className="who-title-block">
            <p className="who-overline who-company-label">SDV EDUTECH PRIVATE LIMITED</p>
            <WhoHeading />
          </div>
          <div className="who-intro-copy">
            <p className="who-lead">Your ideal partner for technology solutions.</p>
            <p>
              We bring digital and technology solutions togetherâ€”from AI-enabled IT systems
              and GIS surveying to data digitization, project consultancy, and capacity building.
            </p>
            <a className="who-story-link" href="/about">
              Discover our story <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="who-proof" aria-label="SDV Edutech at a glance">
          <div className="who-proof-heading">
            <span className="who-proof-mark" aria-hidden="true">SDV</span>
            <span>Built on experience.<br />Focused on what&apos;s next.</span>
          </div>
          <div className="who-stats">
            {stats.map((stat) => (
              <div className="who-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="who-feature-heading">
          <div>
            <p className="who-overline">WHAT SETS US APART</p>
            <h3>Trusted to deliver. Ready to grow.</h3>
          </div>
          <span className="who-feature-note">People, purpose, and practical technology.</span>
        </div>

        <div className="who-features">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <article className="who-feature-card" key={feature.title}>
                <div className="who-card-topline">
                  <span className="who-feature-icon"><IconComponent size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="who-feature-index">0{index + 1}</span>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



