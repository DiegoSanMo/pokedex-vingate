import { PokemonI } from "../../api/interface";

interface PokemonProps {
    current: PokemonI;
}

export const Pokemon = ({current}: PokemonProps) => {
    console.log("current: ", current);
    const { sprites, cries} = current;
    const { front_default } = sprites;
    const audio = new Audio(cries.latest);
    audio.play();
    const { name } = current;

    return (
        <>
            <h1>{name}</h1>
            <img src={front_default} alt="" />
        </>
    )

}

export default Pokemon;