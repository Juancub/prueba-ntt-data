import { useEffect, useState } from "react";
import axios from "axios";
import Searcher from "./Searcher";
import "./character.css";
import rickandmorty from "../assets/Rick_and_Morty.svg.png";

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState({
    name: "",
    status: "",
    gender: "",
    sort: "",
    delete: false,
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${filter.name}&status=${filter.status}&gender=${filter.gender}`
        );

        switch (filter.sort) {
          case "asc":
            setCharacters(
              [...characters].sort((a, b) => a.name.localeCompare(b.name))
            );
            break;

          case "des":
            setCharacters(
              [...characters].sort((a, b) => b.name.localeCompare(a.name))
            );
            break;

          default:
            setCharacters(response.data.results);
            break;
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [filter]);

  return (
    <div>
      <nav className="text-center nav-character">
        <img src={rickandmorty} alt="Rick and Morty" />
      </nav>
      <Searcher setFilter={setFilter} filter={filter} />

      <div className="container mt-5">
        <div className="row row-cols-3 gap-3 justify-content-center align-items-center">
          {characters.map((character) => (
            <div
              className="card p-0 text-center"
              style={{ width: "18rem" }}
              key={character.id}
            >
              <img
                className="card-img-top"
                src={character.image}
                alt={character.name}
              />
              <div className="card-body">
                <p className="card-title">{character.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
