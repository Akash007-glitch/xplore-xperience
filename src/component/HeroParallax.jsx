import { useEffect, useRef } from "react";
import "./HeroParallax.css";

export default function HeroParallax() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax-section">
      {/* Background */}
      <div
        className="parallax-bg"
        ref={bgRef}
        aria-hidden="true"
      ></div>

      {/* Overlay */}
      <div className="parallax-overlay"></div>

      {/* Content */}
      <div className="parallax-content">
        <span className="parallax-badge">
          ⭐ Voted best peaceful place in the world
        </span>

        <h1 className="parallax-title">
          Journeys That Stay With You.
        </h1>

        <p className="parallax-text">
          Handpicked travel experiences crafted with local expertise,
          transparent pricing, and full journey support.
        </p>
      </div>
    </section>
  );
}
