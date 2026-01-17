import PackageModal from "../component/packagemodal";
import "./FeaturedPackage.css";
const [open, setOpen] = useState(false);
/* =======================
   DATA (can move later)
======================= */
const packages = [
  {
    id: 1,
    title: "Tropical Escape",
    location: "Maldives",
    price: "₹1,20,000",
    rating: "4.9",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Mountain Retreat",
    location: "Swiss Alps",
    price: "₹95,000",
    rating: "4.8",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 3,
    title: "City Explorer",
    location: "Paris",
    price: "₹85,000",
    rating: "4.7",
    duration: "4 Days",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
];

/* =======================
   CARD COMPONENT
======================= */
function PackageCard({ data }) {
  return (
    <div className="package-card">
      <div
        className="package-image"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <button onClick={() => setOpen(true)}>View Details</button>

        
        <PackageModal  isOpen={open}
          onClose={() => setOpen(false)}
          data={packageData}/>
        <span className="package-location">{data.location}</span>
      </div>

      <div className="package-content">
        <h3>{data.title}</h3>
        <p className="package-meta">
          ⭐ {data.rating} · {data.duration}
        </p>

        <div className="package-footer">
          <div>
            <small>Starting from</small>
            <strong>{data.price}</strong>
          </div>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}

/* =======================
   MAIN SECTION
======================= */
export default function FeaturedPackages() {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Packages</h2>
        <p>Hand-picked journeys designed for real explorers.</p>
      </div>

      <div className="packages-grid">
        {packages.map((item) => (
          <PackageCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
