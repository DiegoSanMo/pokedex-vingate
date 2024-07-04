import { useEffect, useState } from "react";
import { ButtonsSection, Case, Screen, ScreenSection } from "./styles";
import { PokemonI } from "../../api/interface";
import Card from "../../components/card";
import DirectionButtons from "./DirectionButtons";
import Pokemon from "../pokemon";
import Button from "../../components/buttons";

import ChooseSound from "../../assets/sounds/418137ac-83d4-4526-91bc-1e1867ea8a24.mp3";

interface IPokedeProps {
  pokemons: PokemonI[];
}

export default function Pokedex({ pokemons }: IPokedeProps) {
  const [hover, setHover] = useState(false);

  const audio = new Audio(ChooseSound);

  useEffect(() => {
    if (hover) {
      audio.play();
    }
  }, [hover]);

  const [currentPokemon, setCurrentPokemon] = useState<PokemonI | undefined>();

  const selectPokemonHandler = (pokemon: PokemonI) => {
    audio.play();

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
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
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
