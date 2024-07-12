import axios from "axios";
import { ISpeciesResult, PokemonI } from "./interface";

export async function fetchPokedex(): Promise<PokemonI[] | undefined> {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon-species/"
    );
    const { data } = response;
    if (data) {
      const { results } = data;

      const pokemons = await Promise.all(
        results.map(
          async (result: ISpeciesResult) => await fetchPokemonsData(result.name)
        )
      );
      console.log("pokemons: ", pokemons);
      return pokemons;
    }

    // return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return undefined;
  }
}

export async function fetchPokemonsData(name: string): Promise<any | undefined> {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const { data } = response;
    if (data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching todos:", error);
    return undefined;
  }
}
