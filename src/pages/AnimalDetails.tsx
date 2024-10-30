import { useParams } from "react-router-dom";
import { Animal } from "../utils/types";
import animals from "../datas/datas.json";

export default function AnimalDetails() {
  const { id } = useParams<{ id: string }>();

  function findAnimalById(id: string): Animal | undefined {
    return animals.find((animal) => animal.id === Number(id));
  }

  const foundAnimal = id ? findAnimalById(id) : undefined;

  if (!foundAnimal) {
    return <div>Loading...</div>;
  }

  const { name, image, description, anecdote } = foundAnimal;

  return (
    <div id="animal-details-container">
      <h1>{name} details</h1>

      <section>
        <figure>
          <img src={image} alt={name} />
        </figure>

        <div id="infos">
          <p>{description}</p>

          <p>{anecdote}</p>
        </div>
      </section>
    </div>
  );
}
