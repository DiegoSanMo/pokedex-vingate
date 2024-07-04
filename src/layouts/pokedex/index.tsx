import { useEffect, useState } from "react";
import { ButtonContainer, ButtonsSection, Case, Screen } from "./styles";
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
          style={{ height: "100px" }}
          src={pokemon.sprites.front_default}
          alt=""
        />
      </Card>
    ));
  };

  return (
    <Case>
      <Screen>
        {currentPokemon ? (
          <Pokemon current={currentPokemon} />
        ) : (
          renderPokemons()
        )}
      </Screen>
      <ButtonContainer>
        <DirectionButtons />
        <ButtonsSection>
          <Button type="circle" onClick={back}>
            B
          </Button>
          <Button type="circle" onClick={() => {}}>
            A
          </Button>
        </ButtonsSection>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonsSection>
          <Button type="normal" onClick={back}>
            B
          </Button>
          <Button type="normal" onClick={() => {}}>
            A
          </Button>
        </ButtonsSection>
      </ButtonContainer>
    </Case>
  );
}
