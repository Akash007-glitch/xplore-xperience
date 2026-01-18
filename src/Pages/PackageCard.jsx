import "./FeaturedPackage.css";

export default function PackageCard({ data }) {
  return (
    <article className="package-card">
      <div
        className="package-image"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <span className="package-location">{data.location}</span>
      </div>

      <div className="package-content">
        <h3>{data.title}</h3>
        <p className="package-meta">
          ⭐ {data.rating} · {data.duration}
        </p>

        <div className="package-footer">
          <div>
            <small>Per person</small>
            <strong>{data.price}</strong>
          </div>
          <button>Book Now</button>
        </div>
      </div>
    </article>
  );
}
