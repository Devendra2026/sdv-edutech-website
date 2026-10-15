import ContactForm from './ContactForm';
import Navbar from '@/components/Navbar';

const contactDetails = [
  {
    icon: '⌖',
    label: 'Visit our office',
    lines: ['Software Technology Parks of India (STPI), Agra', 'STPI Shastri Puram, Agra, Uttar Pradesh']
  },
  {
    icon: '⌖',
    label: 'Registered Office Address',
    lines: ['70, Mittal Colony, Ikon City, Near Maghtai, Agra - 283105 (U.P.)'],
  },
  {
    icon: '✉',
    label: 'Email enquiries',
    lines: ['info@sdvedutech.in'],
    href: 'mailto:info@sdvedutech.in',
  },
  {
    icon: '☎',
    label: 'Call us',
    lines: ['+91 90278 11488'],
    href: 'tel:+91 90278 11488',
  },
  {
    icon: '◷',
    label: 'Working hours',
    lines: ['Monday–Saturday: 10:00 AM–6:00 PM', ' Sunday: Closed'],
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="showcase-header contact-header">
        <a href="/" className="showcase-logo" aria-label="SDV Edutech Homepage">
          <img className="brand-logo" src="/logo.png" alt="SDV Edutech Logo" />
        </a>
        <Navbar />
      </header>

      <main className="contact-main">
        <div className="contact-intro">
          <span className="contact-kicker">CONTACT SDV EDUTECH</span>
          <h1>Let&apos;s build something<br /><span>meaningful together.</span></h1>
          <p>Have a question about smart education technology, custom software, or GIS? We&apos;re here to help.</p>
        </div>

        <div className="contact-layout">
          <aside className="contact-info-card" aria-label="Contact details">
            <div className="contact-details">
              {contactDetails.map((detail) => (
                <div className="contact-detail" key={detail.label}>
                  <span className="contact-detail-icon" aria-hidden="true">{detail.icon}</span>
                  <div>
                    <h2>{detail.label}</h2>
                    {detail.lines.map((line) => (
                      detail.href ? (
                        <a href={detail.href} key={line}>{line}</a>
                      ) : (
                        <p key={line}>{line}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              className="contact-map"
              href="https://www.google.com/maps/search/?api=1&query=STPI+Shastri+Puram+Agra+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
              aria-label="Open STPI Agra in Google Maps"
            >
              <svg className="contact-map-art" viewBox="0 0 600 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect width="600" height="190" fill="#e9eff3" />
                <g fill="none" stroke="#c5d1da" strokeWidth="2">
                  <path d="M-20 38 120 64 182 8M27 200l65-68 80 10 71-76 57 22 50-66M130 220l51-82 73 3 31-45 75 14 64-72M320 210l-6-58 75-39 71 27 66-45 90 6M-5 114l99 18 24 58M400 0l20 55-31 56 75 37 65 7M227-10l14 51-26 49 80 51 10 67" />
                  <path d="M0 82h90m86 0h73m84 24h84m71-42h112M54 0v42m162 24v40m97 18v51m142-66v66m84-111v74" />
                </g>
                <g fill="none" stroke="#fff" strokeWidth="9" opacity=".9">
                  <path d="M-10 152 120 92l100 32 90-73 112 21 94-57 110 12M180 200l54-68 40-79-20-63M337 202l15-56 100-43 70 13 91-41" />
                </g>
                <circle cx="328" cy="92" r="20" fill="#d94a4a" opacity=".18" />
                <path d="M328 70c-10 0-18 8-18 18 0 14 18 32 18 32s18-18 18-32c0-10-8-18-18-18Zm0 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" fill="#d94a4a" />
                <text x="353" y="96" fill="#26384a" fontSize="15" fontWeight="700">STPI Agra</text>
              </svg>
              <span className="contact-map-link">Open in Maps <span aria-hidden="true">↗</span></span>
            </a>
          </aside>

          <ContactForm />
        </div>
      </main>
    </div>
  );
}

