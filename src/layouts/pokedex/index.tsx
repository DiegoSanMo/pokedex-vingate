import { useState } from "react";
import { Case, Screen } from "./styles";
import { PokemonI } from "../../api/interface";
import Card from "../../components/card";
import DirectionButtons from "./DirectionButtons";
import Pokemon from "../pokemon";
interface IPokedeProps {
  pokemons: PokemonI[];
}

export default function Pokedex({ pokemons }: IPokedeProps) {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonI | undefined>();

  const selectPokemonHandler = (pokemon: PokemonI) => {
    console.log("pokemon: ", pokemon);
    setCurrentPokemon(pokemon);
  };

 
  const renderPokemons = () => {
    return pokemons.map((pokemon) => (
      <Card
        key={pokemon.name}
        title={pokemon.name}
        onClick={() => selectPokemonHandler(pokemon)}
      >
        <img
          style={{ height: "200px" }}
          src={pokemon.sprites.front_default}
          alt=""
        />
      </Card>
    ));
  };

  return (
    <Case>
      <Screen>{currentPokemon ? <Pokemon current={currentPokemon}/> : renderPokemons()}</Screen>
      <DirectionButtons />
    </Case>
  );
}
