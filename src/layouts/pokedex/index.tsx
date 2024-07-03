import { useState } from "react";
import { ButtonsSection, Case, Screen, ScreenSection } from "./styles";
import { PokemonI } from "../../api/interface";
import Card from "../../components/card";
import DirectionButtons from "./DirectionButtons";
import Pokemon from "../pokemon";
import Button from "../../components/buttons";
interface IPokedeProps {
  pokemons: PokemonI[];
}

export default function Pokedex({ pokemons }: IPokedeProps) {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonI | undefined>();

  const selectPokemonHandler = (pokemon: PokemonI) => {
    console.log("pokemon: ", pokemon);
    setCurrentPokemon(pokemon);
  };

  const back = () => {
    setCurrentPokemon(undefined);
  };

  const next = () => {
    setCurrentPokemon(undefined);
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
      <ScreenSection>
        <Screen>
          {currentPokemon ? (
            <Pokemon current={currentPokemon} />
          ) : (
            renderPokemons()
          )}
        </Screen>
        <DirectionButtons />
      </ScreenSection>
      <ButtonsSection>
        <Button onClick={back}>Back</Button>
        <Button onClick={() => {}}>Ok</Button>
      </ButtonsSection>
    </Case>
  );
}
