import { useContext } from "react";
import { CapturedPokemonContext } from "../contexts/CapturedPokemonContext";

type CapturedPokemonProps = {
  pokemonName: string;
  pokemonUrl: string;
  pokemonId: number | undefined;
  pokemonImage: string | undefined;
  pokemonCount: number | undefined;
};

const CapturedPokemon = ({
  pokemonName,
  pokemonUrl,
  pokemonId,
  pokemonImage,
  pokemonCount,
}: CapturedPokemonProps) => {
  const { releaseAllPokemon, releaseOnePokemon } = useContext(CapturedPokemonContext);

  const releaseAllPokemonFromCaputuredList = (): void  => {
    releaseAllPokemon(pokemonId);
  }

  const releaseOnePokemonFromCapturedList = (): void => {
    releaseOnePokemon(pokemonId);
  }

  return (
    <div className="card">
      <img className="card-img-top" src={pokemonImage} alt="" />
      <div className="card-body">
        <p className="card-text">
          {pokemonName.toUpperCase()} <br />
          Count: {pokemonCount}
        </p>
      </div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={releaseOnePokemonFromCapturedList}
      >
        Release One
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={releaseAllPokemonFromCaputuredList}
      >
        Release All
      </button>
    </div>
  );
};

export default CapturedPokemon;
