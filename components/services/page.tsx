import Image from "next/image";
import { ArrowRight, Check, ChevronRight, Code2, MapPinned, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

const capabilities = ["Custom software", "GIS & mapping", "Cloud modernization"];

export default function ServiceHero() {
  return (
    <main className="service-page">
      <header className="showcase-header services-header">
        <a href="/" className="showcase-logo" aria-label="SDV Edutech Homepage">
          <img className="brand-logo" src="/logo.png" alt="SDV Edutech Logo" />
        </a>
        <Navbar />
      </header>

      <section className="service-hero" aria-labelledby="services-heading">
        <div className="service-grid-bg" aria-hidden="true" />
        <div className="service-orb service-orb-one" aria-hidden="true" />
        <div className="service-orb service-orb-two" aria-hidden="true" />
        <div className="service-inner">
          <div className="service-copy">
            <nav className="service-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a><ChevronRight size={14} aria-hidden="true" /><span>Services</span>
            </nav>
            <span className="service-eyebrow"><Sparkles size={14} aria-hidden="true" /> WHAT WE DO</span>
            <h1 id="services-heading">Enterprise services<br />that <span>scale.</span></h1>
            <p className="service-description">
              We turn complex spatial data into clear, actionable intelligence through custom software, GIS mapping, and cloud modernization for government and enterprise teams.
            </p>
            <div className="service-capabilities" aria-label="Our capabilities">
              {capabilities.map((item) => <span key={item}><Check size={13} aria-hidden="true" /> {item}</span>)}
            </div>
            <a className="service-cta" href="/contact">Let&apos;s discuss your project <ArrowRight size={17} aria-hidden="true" /></a>
          </div>

          <div className="service-visual-wrap">
            <div className="service-visual">
              <Image src="/service.avif" alt="A team collaborating around technology and digital tools" fill priority sizes="(max-width: 760px) 90vw, 560px" className="service-image" />
              <div className="service-image-shade" aria-hidden="true" />
              <div className="service-image-label"><span><Code2 size={16} aria-hidden="true" /></span><div><strong>Technology with purpose</strong><small>Built around your goals</small></div></div>
              <span className="service-image-index">01 <i>/</i> 03</span>
            </div>
            <div className="service-image-caption"><MapPinned size={14} aria-hidden="true" /> From local insight to enterprise scale</div>
          </div>
        </div>
      </section>

      <section className="service-overview" aria-labelledby="service-overview-heading">
        <div className="service-overview-inner">
          <div className="service-overview-heading">
            <span>OUR EXPERTISE</span>
            <h2 id="service-overview-heading">Services built around <em>real-world needs.</em></h2>
            <p>From software and GIS to training and consulting, explore how we help teams move forward.</p>
          </div>
          <figure className="service-overview-frame">
            <Image src="/ourservices.png" alt="SDV Edutech services: software development, UI and UX design, survey management, GIS solutions, outsourcing, training, and Swachh Bharat consulting." width={1312} height={810} sizes="(max-width: 1200px) 94vw, 1160px" className="service-overview-image" />
          </figure>
        </div>
      </section>
    </main>
  );
}

