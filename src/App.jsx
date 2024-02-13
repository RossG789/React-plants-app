import PlantCard from "./components/PlantCard";

export default function App() {
  return (
    <div>
      <h1>Cool Plants!</h1>
      <PlantCard
        plantName="Daffodil"
        location="World-wide"
        imgLink="https://www.rhs.org.uk/getmedia/0f205892-5d07-4a09-8041-16a74510f5ce/daffodils-desktop-hero-1920x978.jpg"
      />
      <PlantCard
        plantName="Ficus"
        location="World-wide"
        imgLink="https://bloomboxclub.com/cdn/shop/articles/Ficus_Plant_Care.jpg?v=1693913570"
      />
    </div>
  );
}
