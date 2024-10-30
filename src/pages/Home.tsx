import AnimalsList from "../components/AnimalsList";
import animals from "../datas/datas.json";

export default function Home() {
  return (
    <div id="home-container">
      <h1>Home</h1>

      <AnimalsList animals={animals} />

      <cite>All images from Unsplash</cite>
    </div>
  );
}
