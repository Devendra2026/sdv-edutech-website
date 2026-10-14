import Navbar from '@/components/Navbar';

interface AboutPageProps {
  imageSrc?: string;
}

const values = [
  { icon: '✦', title: 'Innovation', description: 'Smart & future-ready solutions.' },
  { icon: '✓', title: 'Quality', description: 'Reliable and durable systems.' },
  { icon: '♧', title: 'Customer Focus', description: 'Your vision, our priority.' },
  { icon: '↗', title: 'Growth', description: 'Building a smarter digital future.' },
];

export default function AboutPage({ imageSrc = '/about.png' }: AboutPageProps) {
  return (
    <div className="about-scene">
      <div
        className="about-background"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.28), rgba(255,255,255,.08)), url("${imageSrc}")` }}
        aria-hidden="true"
      />
      <header className="showcase-header about-header">
        <a href="/" className="showcase-logo" aria-label="SDV Edutech Homepage">
          <img className="brand-logo" src="/logo.png" alt="SDV Edutech Logo" />
        </a>
        <Navbar />
      </header>

      <main className="about-content">
        <section className="about-copy" aria-labelledby="about-heading">
          <p className="about-eyebrow">ABOUT THE COMPANY</p>
          <h1 id="about-heading" className="about-company-name">
            SDV EDUTECH Pvt Ltd
          </h1>
          <p className="about-description">
            A leading innovator in educational technology, producing Digital Communication Tools like Smart Interactive Podiums, Interactive Touch Tables, and various kinds of Digital Kiosks. We are devoted to designing and creating solutions that exceed market expectations.
          </p>
          <p className="about-description about-description-secondary">
            Committed to revolutionizing learning with Smart Educational Tools, digital ergonomic systems are an essential communication commodity for the digital age we&apos;re in.
          </p>
        </section>

        <section className="about-values" aria-label="Our values">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <span className="about-value-icon" aria-hidden="true">{value.icon}</span>
              <span className="about-value-copy">
                <strong>{value.title}</strong>
                <span>{value.description}</span>
              </span>
            </article>
          ))}
        </section>
      </main>

      <div className="about-footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
          <path d="M0 56C180 115 300 122 492 79C701 32 793 43 974 84C1158 126 1293 105 1440 65V130H0Z" />
        </svg>
      </div>
      <footer className="about-footer">
        <span>© Agra, Uttar Pradesh, India</span>
        <span>© 2026 SDV EDUTECH Pvt Ltd</span>
      </footer>
    </div>
  );
}


