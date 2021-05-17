import React, { useEffect, useState, useContext } from "react";
import { PokemonDetails } from "../interfaces/pokemon.interface";
import { CapturedPokemonContext } from "../contexts/CapturedPokemonContext";

import axios from "axios";

type PokemonDetailProps = {
  pokemonName: string;
  pokemonUrl: string;
};

const PokemonDetail = ({ pokemonName, pokemonUrl }: PokemonDetailProps) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>({
    pokemonName,
    pokemonImage: "",
    pokemonId: 0,
  });
  const { addToCapturedPokemonList } = useContext(CapturedPokemonContext);

  useEffect(() => {
    getPokemonDetails();
  }, []);

  const getPokemonDetails = async (): Promise<void> => {
    const pokeDetails = await axios.get(pokemonUrl);
    const pokemonImage =
      pokeDetails.data.sprites.other["official-artwork"].front_default;
    const pokemonId: number = Number(
      pokemonUrl.split("/")[pokemonUrl.split("/").length - 2]
    );
    const pokemonDetailsObject: PokemonDetails = {
      pokemonName,
      pokemonImage,
      pokemonId,
    };
    setPokemonDetails(pokemonDetailsObject);
  };

  const addPokemon = (): void => {
    const { pokemonId, pokemonImage } = pokemonDetails;
    addToCapturedPokemonList(pokemonId, pokemonName, pokemonUrl, pokemonImage);
  };

  return (
    <div className="card">
      {Object.keys(pokemonDetails).length !== 0 && (
        <img
          className="card-img-top"
          src={pokemonDetails.pokemonImage}
          alt=""
        />
      )}
      <div className="card-body">
        <p className="card-text">{pokemonName.toUpperCase()}</p>
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={addPokemon}
      >
        Add
      </button>
      {/* <button type="button" className="btn btn-info">Find Out More</button> */}
    </div>
  );
};

export default PokemonDetail;
