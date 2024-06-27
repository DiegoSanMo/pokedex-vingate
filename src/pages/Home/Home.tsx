import { useEffect, useState } from "react";
import { fetchPokedex } from "../../api/api";
import { Card } from "../../components";
import { ButtonContainer, HomeContainer } from "./styles";
import { Pokemon } from "../../api/interface";
import Pokedex from "../../components/pokedex";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokedex = async () => {
      const data = await fetchPokedex();
      if (data) {
        setPokemons(data);
      }
    };

    getPokedex();
  }, []);

  const renderPokedex = () =>
    pokemons.map((data: Pokemon) => (
      <Card key={data.name} title={data.name}>
        <img
          style={{ height: "200px" }}
          src={data.sprites.front_default}
          alt=""
        />
      </Card>
    ));

  return (
    <div style={{background: 'red', display: 'flex'}}>

      <Pokedex>
        <HomeContainer>{renderPokedex()}</HomeContainer>
        <button>Button</button>
      </Pokedex>
      <ButtonContainer >
        <button>Arrow</button>
        <button>Arrow</button>
        <button>Arrow</button>
        <button>Arrow</button>
      </ButtonContainer>
    </div>
  );
}
