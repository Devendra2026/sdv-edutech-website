"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const packageGroups = [
  {
    label: "Website Packages",
    links: [
      { label: "Basic Website", href: "/packages/website/basicpackage" },
      { label: "Standard Website", href: "/packages/website/standardpackage" },
      { label: "Dynamic Website", href: "/packages/website/dynamicpackage" },
    ],
  },
  {
    label: "Software Packages",
    links: [
      { label: "Basic Software", href: "/packages/software/basicsoftwarepakage" },
      {
        label: "Premium Software",
        href: "/packages/software/premiumpackage",
      },
    ],
  },
  {
    label: "Digital Marketing Packages",
    links: [
      { label: "Basic SEO", href: "/packages/digitalmarketing/basicseo" },
      { label: "Advanced SEO", href: "/packages/digitalmarketing/advanceseo" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("sdv-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("theme-dark", shouldUseDarkMode);
    const syncThemeState = window.requestAnimationFrame(() => {
      setIsDarkMode(shouldUseDarkMode);
    });

    return () => window.cancelAnimationFrame(syncThemeState);
  }, []);

  useEffect(() => {
    const closeMenus = (event: PointerEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent && event.key !== "Escape") return;
      if (
        event instanceof PointerEvent &&
        event.target instanceof Node &&
        navRef.current?.contains(event.target)
      ) {
        return;
      }

      setIsPackagesOpen(false);
      if (event instanceof KeyboardEvent) setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeMenus);
    document.addEventListener("keydown", closeMenus);

    return () => {
      document.removeEventListener("pointerdown", closeMenus);
      document.removeEventListener("keydown", closeMenus);
    };
  }, []);

  const closeNavigation = () => {
    setIsOpen(false);
    setIsPackagesOpen(false);
  };

  const toggleTheme = () => {
    const nextIsDarkMode =
      !document.documentElement.classList.contains("theme-dark");
    document.documentElement.classList.toggle("theme-dark", nextIsDarkMode);
    window.localStorage.setItem("sdv-theme", nextIsDarkMode ? "dark" : "light");
    setIsDarkMode(nextIsDarkMode);
  };

  const themeToggle = (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDarkMode}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <FiSun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <FiMoon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );

  const renderNavItem = (item: (typeof navItems)[number]) => (
    <li key={item.label}>
      <a
        href={item.href}
        className={`nav-button ${pathname === item.href ? 'active' : ''}`}
        onClick={closeNavigation}
      >
        {item.label}
      </a>
    </li>
  );

  return (
    <div
      className={`flex items-center flex-1 justify-between ml-8 navbar-content${isScrolled ? " navbar-scrolled" : ""}`}
    >
      <nav ref={navRef} className="showcase-nav mx-auto" aria-label="Main navigation">
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => {
            setIsOpen((open) => !open);
            setIsPackagesOpen(false);
          }}
        >
          <span className={isOpen ? "menu-icon menu-icon-open" : "menu-icon"} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        {isOpen && (
          <button
            type="button"
            className="nav-drawer-backdrop"
            aria-label="Close navigation menu"
            onClick={closeNavigation}
          />
        )}
        <ul
          id="primary-navigation"
          className={isOpen ? "nav-list nav-list-open" : "nav-list"}
        >
          {navItems.slice(0, 3).map(renderNavItem)}
          <li className={`packages-menu-item${pathname.startsWith("/packages/") ? " packages-active" : ""}`}>
            <button
              type="button"
              className={`nav-button packages-toggle${pathname.startsWith("/packages/") ? " active" : ""}`}
              aria-expanded={isPackagesOpen}
              aria-controls="packages-panel"
              onClick={() => setIsPackagesOpen((open) => !open)}
            >
              Packages
              <span className={isPackagesOpen ? "packages-chevron packages-chevron-open" : "packages-chevron"} aria-hidden="true" />
            </button>
            {isPackagesOpen && (
              <div id="packages-panel" className="packages-dropdown">
                {packageGroups.map((group) => (
                  <section className="packages-group" key={group.label}>
                    <h2>{group.label}</h2>
                    <ul>
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            onClick={closeNavigation}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}
          </li>
          {navItems.slice(3).map(renderNavItem)}
          <li className="nav-theme-item">{themeToggle}</li>
          <li className="mobile-drawer-signin">
            <div className="mobile-drawer-actions">
              {themeToggle}
              <a href="/signin" className="signin-button" onClick={closeNavigation}>
                Sign In
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="navbar-actions hidden md:flex">
        <a href="/signin" className="signin-button">Sign In</a>
      </div>
    </div>
  );
}
