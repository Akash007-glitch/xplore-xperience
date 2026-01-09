
import DestinationCard from "./DestinationCard ";
import { destinations } from "../data/DestinationCardData";

// const destinations = Destinations;


export default function Destinations() {
  return (
    <section className="destination-section">
      <h2 className="section-title">Popular Destinations</h2>

      <div className="destination-panel">
        {destinations.map((item) => (
          <DestinationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}