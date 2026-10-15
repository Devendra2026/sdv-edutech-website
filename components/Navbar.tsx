"use client";

import React, { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "#clients" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="showcase-nav" aria-label="Main navigation">
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={isOpen ? "menu-icon menu-icon-open" : "menu-icon"} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <ul className={isOpen ? "nav-list nav-list-open" : "nav-list"}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="nav-button" onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

