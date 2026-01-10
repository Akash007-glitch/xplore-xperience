
import DestinationCard from "./DestinationCard ";
import { destinations } from "../data/DestinationCardData";
import { useState } from "react";

export default function Destinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const maxIndex = Math.max(0, destinations.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleCards = destinations.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="destination-section">
      <div className="destination-wrapper">
        <h2 className="section-title">Popular Destinations</h2>

        <div className="slider-container">
          <button
            className="slider-arrow slider-arrow-left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            ❮
          </button>

          <div className="destination-panel">
            {visibleCards.map((item) => (
              <DestinationCard key={item.id} item={item} />
            ))}
          </div>

          <button
            className="slider-arrow slider-arrow-right"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}