import { useEffect, useState } from "react";
import { fetchPokedex } from "../../api/api";
import { Card } from "../../components";
import { HomeContainer } from "./styles";
import { Pokemon } from "../../api/interface";

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
        <img style={{height: '200px'}} src={data.sprites.front_default} alt="" />
      </Card>
    ));

  return <HomeContainer>{renderPokedex()}</HomeContainer>;
}
