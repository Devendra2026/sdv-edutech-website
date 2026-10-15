import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our clients", href: "/#clients" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "WhatsApp", href: "https://wa.me/919027811488", icon: "whatsapp" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Twitter", href: "https://x.com/", icon: "x" },
];

function SocialMark({ type }: { type: string }) {
  if (type === "whatsapp") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 .1C5.4.1.1 5.4.1 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.1-3.6-8.3ZM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.6 9.6 0 1 1 12 21.7Zm5.3-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" /></svg>;
  }
  if (type === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6ZM8 18H5V9h3v9ZM6.5 7.8A1.8 1.8 0 1 1 6.5 4a1.8 1.8 0 0 1 0 3.7ZM19 18h-3v-4.4c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V18h-3V9h2.9v1.2h.1a3.2 3.2 0 0 1 2.8-1.5c3 0 3.5 2 3.5 4.5V18Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" /></svg>;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-glow" aria-hidden="true" />
      <div className="site-footer-inner">
        <section className="footer-brand" aria-label="About SDV Edutech">
          <a className="footer-brand-link" href="/" aria-label="SDV Edutech home">
            <img src="/logo.png" alt="SDV Edutech" className="footer-logo" />
            <span>SDV <b>EDUTECH PVT. LTD.</b></span>
          </a>
          <p>Thoughtful technology for smarter learning, stronger communities, and a more connected future.</p>
          <div className="footer-socials" aria-label="Social media">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} title={social.label}>
                <SocialMark type={social.icon} />
              </a>
            ))}
          </div>
        </section>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <h2>Explore</h2>
          <ul>
            {navigation.map((item) => <li key={item.label}><a href={item.href}>{item.label}<ArrowUpRight size={13} aria-hidden="true" /></a></li>)}
          </ul>
        </nav>

        <section className="footer-contact" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">Get in touch</h2>
          <a className="footer-contact-link" href="tel:+919027811488"><span className="footer-contact-icon"><Phone size={15} />
          </span>
            <span><small>Call us</small>+91 90278 11488</span>
          </a>
          <a className="footer-contact-link" href="mailto:info@sdvedutech.in">
            <span
              className="footer-contact-icon"><Mail size={15} /></span><span><small>Email us</small>info@sdvedutech.in</span>
          </a>
          <div className="footer-address">
            <span className="footer-contact-icon"><MapPin size={15} /></span><span><small>Office</small>STPI Shastri Puram, Agra, Uttar Pradesh</span>
          </div>
          <div className="footer-address footer-registered">
            <span className="footer-contact-icon"><MapPin size={15} />
            </span>
            <span><small>Registered office</small>70, Mittal Colony, Ikon City, Near Maghtai, Agra – 283105</span>
          </div>
        </section>
      </div>
      <div className="site-footer-bottom">
        <span>© SDV Edutech Pvt. Ltd. All rights reserved.</span>
        <span>Made for a smarter tomorrow <i aria-hidden="true">✦</i></span>
      </div>
    </footer>
  );
}

