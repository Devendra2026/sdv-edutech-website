import React from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="showcase-nav" aria-label="Main navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="nav-button">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

