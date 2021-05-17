import React, { useContext } from "react";
import { CapturedPokemonContext } from "../contexts/CapturedPokemonContext";
import { Pokemon } from "../interfaces/pokemon.interface";
import CapturedPokemon from "./CapturedPokemon";

const CapturedPokemonList: React.FC = () => {
  const { capturedPokemonList } = useContext(CapturedPokemonContext);

  if (capturedPokemonList.length !== 0) {
    return (
      <React.Fragment>
        <div className="row">
          {capturedPokemonList.map((pokemon: Pokemon) => {
            return (
              <div className="col-sm-3 col-md-2" key={pokemon.pokemonId}>
                <div style={{ padding: "0.4rem" }}>
                  <CapturedPokemon
                    pokemonName={pokemon.name}
                    pokemonUrl={pokemon.url}
                    pokemonId={pokemon.pokemonId}
                    pokemonImage={pokemon.pokemonImage}
                    pokemonCount={pokemon.count}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  } else {
    return <div>No pokemon selected yet</div>;
  }
};

export default CapturedPokemonList;
