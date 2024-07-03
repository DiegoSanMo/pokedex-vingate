import { PokemonI } from "../../api/interface";

interface PokemonProps {
    current: PokemonI;
}

export const Pokemon = ({current}: PokemonProps) => {
    console.log("current: ", current);
    const { name } = current;

    return (
        <h1>{name}</h1>
    )

}

export default Pokemon;