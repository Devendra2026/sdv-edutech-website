"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Award, BadgeCheck, Maximize2, X } from "lucide-react";

const recognitions = [
  { title: "MSME Certified", category: "Government of India", image: "" },
  { title: "Enterprise Partner", category: "Strategic Partnership", image: "" },
  { title: "Technology Leader", category: "Innovation & Excellence", image: "" },
  { title: "Quality Assured", category: "Quality Management", image: "" },
  { title: "Trusted Organization", category: "Industry Recognition", image: "" },
];

function RecognitionArtwork() {
  return (
    <div className="recognition-placeholder" aria-hidden="true">
      <span className="recognition-orbit recognition-orbit-one" />
      <span className="recognition-orbit recognition-orbit-two" />
      <span className="recognition-seal"><Award size={38} strokeWidth={1.25} /></span>
      <span className="recognition-placeholder-label">CERTIFIED · RECOGNIZED · TRUSTED</span>
    </div>
  );
}

export default function GallerySlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const move = useCallback((direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".recognition-card");
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 20;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextScroll = track.scrollLeft + direction * (card.offsetWidth + gap);
    if (direction > 0 && track.scrollLeft >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction < 0 && track.scrollLeft <= 4) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      track.scrollTo({ left: Math.max(0, Math.min(nextScroll, maxScroll)), behavior: "smooth" });
    }
  }, []);

  const select = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".recognition-card");
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 20;
    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: Math.min(index * (card.offsetWidth + gap), maxScroll), behavior: "smooth" });
  };

  useEffect(() => {
    if (isPaused || selected !== null) return;
    const timer = window.setInterval(() => move(1), 1000);
    return () => window.clearInterval(timer);
  }, [isPaused, selected, move]);

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section className="recognition-section" aria-labelledby="recognition-heading">
      <div className="recognition-shell">
        <div className="recognition-heading">
          <span className="recognition-eyebrow"><span /> CERTIFICATIONS</span>
          <h2 id="recognition-heading">Our <span>Recognition and Certifications</span></h2>
          <p>Milestones that reflect the trust, quality, and care behind every solution.</p>
        </div>

        <div
          className="recognition-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
          }}
        >
          <button className="recognition-arrow recognition-arrow-prev" type="button" onClick={() => move(-1)} aria-label="Previous recognition">
            <ArrowLeft size={19} aria-hidden="true" />
          </button>
          <div
            className="recognition-track"
            ref={trackRef}
            onScroll={(event) => {
              const track = event.currentTarget;
              const card = track.querySelector<HTMLElement>(".recognition-card");
              if (!card) return;
              const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 20;
              setActive(Math.round(track.scrollLeft / (card.offsetWidth + gap)));
            }}
          >
            {recognitions.map((item, index) => (
              <article className="recognition-card" key={item.title}>
                <div className="recognition-art">
                  {item.image ? (
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 680px) 84vw, (max-width: 1100px) 44vw, 340px" className="recognition-image" />
                  ) : <RecognitionArtwork />}
                  <span className="recognition-number">0{index + 1}</span>
                  <button className="recognition-zoom" type="button" onClick={() => setSelected(index)} aria-label={`Open ${item.title}`}>
                    <Maximize2 size={15} aria-hidden="true" />
                  </button>
                </div>
                <div className="recognition-card-copy">
                  <span className="recognition-card-category"><BadgeCheck size={14} aria-hidden="true" /> {item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <button className="recognition-arrow recognition-arrow-next" type="button" onClick={() => move(1)} aria-label="Next recognition">
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        </div>

        <div className="recognition-controls">
          <div className="recognition-dots" aria-label="Choose recognition slide">
            {recognitions.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`recognition-dot${active === index ? " recognition-dot-active" : ""}`}
                aria-label={`Show ${item.title}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => select(index)}
              />
            ))}
          </div>
          <span className="recognition-count">{String(Math.min(active + 1, recognitions.length)).padStart(2, "0")} <i>/</i> {String(recognitions.length).padStart(2, "0")}</span>
          <span className="recognition-autoplay"><span /> Auto play</span>
        </div>
      </div>

      {selected !== null && (
        <div className="recognition-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <div className="recognition-modal-panel" role="dialog" aria-modal="true" aria-labelledby="recognition-modal-title">
            <button className="recognition-modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close preview"><X size={19} /></button>
            <div className="recognition-modal-art">
              {recognitions[selected].image ? (
                <Image src={recognitions[selected].image} alt={recognitions[selected].title} fill sizes="(max-width: 700px) 90vw, 700px" className="recognition-image" />
              ) : <RecognitionArtwork />}
            </div>
            <div className="recognition-modal-copy">
              <span className="recognition-card-category"><BadgeCheck size={14} aria-hidden="true" /> {recognitions[selected].category}</span>
              <h2 id="recognition-modal-title">{recognitions[selected].title}</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}




