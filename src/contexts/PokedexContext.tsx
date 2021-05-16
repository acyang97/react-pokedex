import React, { createContext, useState, useEffect } from "react";
import { Pokemon } from "../interfaces/pokemon.interface";
import axios from 'axios';
type setValue = (value: any) => void;

interface PokedexContextInterface {
  pokemonList: Pokemon[];
  setPokemonList: setValue;
}

export const PokedexContext = createContext<PokedexContextInterface | any | null>(null);

const PokedexProvider: React.FC = props => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokeApiUrl, setPokeApiUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  
  useEffect(() => {
    getListOfPokemon();
  }, [pokeApiUrl]);

  const getListOfPokemon = async (): Promise<void> => {
    const listOfPokemon = await axios.get(
      pokeApiUrl
    );
    setPokemonList(listOfPokemon.data.results);
  };

  const viewNextPokemons = async (): Promise<void> => {
    console.log('viewNextPokemons');
    let response = await axios.get(pokeApiUrl);
    console.log('response',response)
    const nextUrl = response.data.next;
    if (nextUrl) {
      setPokeApiUrl(nextUrl);
    }
  }

  const viewPreviousPokemons = async (): Promise<void> => {
    console.log('viewPreviousPokemons');
    let response = await axios.get(pokeApiUrl);
    const previousUrl = response.data.previous;
    if (previousUrl) {
      setPokeApiUrl(previousUrl);
    }
  }

  return (
    <PokedexContext.Provider
      value={{
        pokemonList,
        setPokemonList,
        viewNextPokemons,
        viewPreviousPokemons
      }}
    >
      {props.children}
    </PokedexContext.Provider>
  );
};

export default PokedexProvider;