import { useState } from "react";
import PackageModal from "../component/packagemodal";
import "./FeaturedPackage.css";

/* ======================
   DATA (mock for now)
====================== */
const packages = [
  {
    id: 1,
    title: "Tropical Escape",
    location: "Maldives",
    price: 1200,
    rating: 4.9,
    days: 7,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    itinerary: [
      {
        title: "Day 1: Arrival in Paradise",
        desc: "Arrival at Velana International Airport and transfer to the resort.",
      },
      {
        title: "Day 2: Underwater Wonders",
        desc: "Snorkeling and reef exploration with marine experts.",
      },
    ],
    includes: [
      "7 Nights in Overwater Villa",
      "Daily Breakfast & Dinner",
      "Speedboat Transfers",
    ],
    excludes: [
      "International Flights",
      "Travel Insurance",
      "Personal Expenses",
    ],
  },
  {
    id: 2,
    title: "Mountain Retreat",
    location: "Swiss Alps",
    price: 1600,
    rating: 4.8,
    days: 6,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    itinerary: [
      {
        title: "Day 1: Arrival",
        desc: "Scenic mountain transfer and lodge check-in.",
      },
    ],
    includes: ["Luxury Lodge Stay", "Guided Hikes"],
    excludes: ["Flights", "Insurance"],
  },
];

/* ======================
   COMPONENT
====================== */
export default function FeaturedPackages() {
  // ✅ HOOKS MUST BE HERE (TOP LEVEL)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Packages</h2>

      <div className="packages-grid">
        {packages.map((item) => (
          <div key={item.id} className="package-card">
            <img src={item.image} alt={item.title} />

            <div className="package-info">
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <strong>${item.price}</strong>

              {/* ✅ BOOK NOW BUTTON */}
              <button
                onClick={() => {
                  setSelectedPackage(item);
                  setIsModalOpen(true);
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MODAL MUST BE RENDERED HERE */}
      <PackageModal
        isOpen={isModalOpen}
        data={selectedPackage}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
