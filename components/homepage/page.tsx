"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const slides = [
  { src: "/software.png", alt: "Software" },
  { src: "/sdv.png", alt: "SDV" },
  { src: "/gis.png", alt: "GIS" },
   { src: "/Sbm.png", alt: "SBM" },
];

export default function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <main className="showcase" aria-label="SDV Edutech image slider">
      <header className="showcase-header">
        <a href="/" className="showcase-logo" aria-label="SDV Edutech Homepage">
          <img className="brand-logo" src="/logo.png" alt="SDV Edutech Logo" />
        </a>
        <Navbar />
      </header>

      {/* Slider Left Arrow */}
      <button
        className="slider-arrow slider-arrow-prev"
        onClick={() => move(-1)}
        aria-label="Previous slide"
        title="Previous slide"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          className={`slide${active === index ? " slide-active" : ""}`}
          key={slide.src}
          aria-hidden={active !== index}
        >
          <img className="slide-image" src={slide.src} alt={slide.alt} />
        </div>
      ))}

      {/* Slider Right Arrow */}
      <button
        className="slider-arrow slider-arrow-next"
        onClick={() => move(1)}
        aria-label="Next slide"
        title="Next slide"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Slide Dots Indicator */}
      <div className="slide-dots-indicator" aria-label="Slide indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            className={`slide-dot${active === index ? " slide-dot-active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`Show ${slide.alt} image`}
            aria-current={active === index ? "true" : undefined}
          />
        ))}
      </div>

      <div className="progress-track" aria-hidden="true"><span key={active} /></div>

      <Footer />
    </main>
  );
}
