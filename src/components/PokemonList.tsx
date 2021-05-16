import React, { useState, useEffect, useContext } from "react";
import { Pokemon } from "../interfaces/pokemon.interface";
import axios from "axios";
import PokemonDetail from "./PokemonDetail";
import { PokedexContext } from '../contexts/PokedexContext';

const PokemonList: React.FC = () => {
  const { pokemonList } = useContext(PokedexContext);

  useEffect(() => {
    console.log(typeof pokemonList);
    console.log(pokemonList);
  })

  const getKeyOfPokemon = (pokemon: Pokemon): number => {
    const pokemonId: number = Number(pokemon.url.split('/')[pokemon.url.split('/').length - 2]);
    return pokemonId;
  }

  return (
    <React.Fragment>
      <div className="row">
        {pokemonList.map((pokemon: Pokemon) => {
          return (
            <div className="col-sm-3"  key={getKeyOfPokemon(pokemon)}>
              <div style={{padding: '0.4rem'}}>
                <PokemonDetail
                  key={getKeyOfPokemon(pokemon)}
                  pokemonName={pokemon.name}
                  pokemonUrl={pokemon.url}
                />
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
