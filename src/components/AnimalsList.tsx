import { Animal } from "../utils/types";
import AnimalCard from "./AnimalCard";

type AnimalsListProps = {
  animals: Animal[];
};

export default function AnimalsList({ animals }: AnimalsListProps) {
  return (
    <div id="animals-list-container">
      {animals?.map((animal) => (
        <AnimalCard key={animal.id} {...animal} />
      ))}
    </div>
  );
}
