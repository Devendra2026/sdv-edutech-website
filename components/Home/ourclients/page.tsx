import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Building2, Sparkles } from 'lucide-react';

const clients = [
  { 
    name: 'Nagar Panchayat Chhata', 
    type: 'Local Government', 
    imagePath: '/governmentlogo.png',
    websiteUrl: 'https://www.npchhata.com' // Yahan Chhata ki website ka link dalein
  },
  { 
    name: 'Nagar Panchayat Raya', 
    type: 'Local Government', 
    imagePath: '/governmentlogo.png',
    websiteUrl: 'https://www.npraya.org' // Yahan Raya ki website ka link dalein
  },
  { 
    name: 'Nagar Panchayat Jyoti Khudia', 
    type: 'Local Government', 
    imagePath: '/governmentlogo.png',
    websiteUrl: 'https://example-jyotikhudia.gov.in' // Yahan Jyoti Khudia ki website ka link dalein
  },
];

export default function ClientPage() {
  return (
    <section id="clients" className="clients-section" aria-labelledby="clients-heading">
      <div className="clients-container">
        <div className="clients-heading-row">
          <div className="clients-heading-copy">
            <span className="clients-eyebrow"><Sparkles size={14} aria-hidden="true" /> TRUSTED PARTNERS</span>
            <h2 id="clients-heading">Our <span>Trusted Government Clients</span></h2>
            <p>Building better learning and communities, together.</p>
          </div>
          <div className="clients-count" aria-label="3 featured partners">
            <strong>03</strong><span>Featured<br />partners</span>
          </div>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <article className="client-card" key={client.name}>
              <div className="client-logo-wrap">
                <Image src={client.imagePath} alt={`${client.name} logo`} fill sizes="(max-width: 680px) 64px, 72px" className="client-logo" />
              </div>
              <div className="client-copy">
                <span className="client-index">PARTNER 0{index + 1}</span>
                <h3>{client.name}</h3>
                <span className="client-type"><Building2 size={13} aria-hidden="true" /> {client.type}</span>
              </div>
              
              {/* Updated href to point to respective client's website URL */}
              <a 
                className="client-link" 
                href={client.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Visit website of ${client.name}`}
              >
                <span>Visit</span><ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="clients-note"><span aria-hidden="true" /> Growing together through trusted partnerships</div>
      </div>
    </section>
  );
}

