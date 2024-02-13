import "./PlantCard.css";

export default function PlantCard({ plantName, imgLink, location }) {
  return (
    <div id="plant-card" className="plants">
      <h1>{plantName}</h1>
      <img className="img" src={imgLink} alt="" />
      <h2>Location: {location}</h2>
    </div>
  );
}
