import { useEffect, useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 2,
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    id: 3,
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

export default function DestinationCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ⏳ 3 seconds loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Popular Destinations</h2>


      {loading ? (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="destination-card">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            alt="El Nido"
            className="card-image"
          />

          <div className="price-badge">
            starts at ₹4,999
          </div>

          <div className="card-overlay">
            <h3>El Nido</h3>
            <p className="tagline">Beach paradise</p>

            <div className="card-meta">
              <span className="rating">⭐ 4.8 (1.2k)</span>
              <span className="location">📍 Palawan, Region</span>
            </div>
          </div>
        </div>
        


      )}
      <button className="view-more-btn">View More</button>
    </section>
  );
}
