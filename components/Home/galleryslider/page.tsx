"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Award, BadgeCheck, Maximize2, X } from "lucide-react";

const recognitions = [
  { title: "MSME Certified", category: "Government of India", image: "/msme.jpeg" },
  { title: "Compilance Certified", category: "Strategic Partnership", image: "/compilance.jpeg" },
  { title: "ISO Certified", category: "Innovation & Excellence", image: "/iso.jpg" },
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
  const [selected, setSelected] = useState<number | null>(null);

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

        <div className="recognition-carousel">
          <div className="recognition-track">
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




