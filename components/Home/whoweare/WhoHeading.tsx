"use client";

import { useEffect, useState } from "react";

const words = ["Technology", "for", "a", "smarter,", "more", "connected", "future."];

export default function WhoHeading() {
  const [hiddenThrough, setHiddenThrough] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = -1;
    let timer: number;
    const tick = () => {
      if (current >= words.length - 1) {
        current = -1;
        setHiddenThrough(-1);
        timer = window.setTimeout(tick, 2000);
        return;
      }
      current += 1;
      setHiddenThrough(current);
      timer = window.setTimeout(tick, 500);
    };

    timer = window.setTimeout(tick, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <h2 id="who-heading" aria-label="Technology for a smarter, more connected future.">
      {words.map((word, index) => (
        <span
          key={word}
          aria-hidden="true"
          className={`who-title-word${index >= 4 ? " who-title-word-accent" : ""}${index <= hiddenThrough ? " who-title-word-hidden" : ""}`}
        >
          {word}
        </span>
      ))}
    </h2>
  );
}
