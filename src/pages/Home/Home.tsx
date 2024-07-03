import { useEffect, useState } from "react";
import { fetchPokedex } from "../../api/api";
import { Container } from "./styles";
import { PokemonI } from "../../api/interface";
import Pokedex from "../../layouts/pokedex";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonI[]>([]);

  useEffect(() => {
    const getPokedex = async () => {
      const data = await fetchPokedex();
      if (data) {
        setPokemons(data);
      }
    };
    getPokedex();
  }, []);


  return (
    <Container>
      <Pokedex pokemons={pokemons}/>
    </Container>
  );
}
