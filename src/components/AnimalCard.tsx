import { Link } from "react-router-dom";
import { Animal } from "../utils/types";

export default function AnimalCard({ id, name, image }: Animal) {
  return (
    <div className="animal-card">
      <figure>
        <img src={image} alt={name} />
      </figure>

      <h2>{name}</h2>

      <Link to={`/animal/${id}`}>Plus d'infos</Link>
    </div>
  );
}
