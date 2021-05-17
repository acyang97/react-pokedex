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
  const [numberOfPokemonPerPage, setNumberOfPokemonPerPage] = useState<number>(20);

  useEffect(() => {
    getListOfPokemon();
  }, [pokeApiUrl]);

  const getListOfPokemon = async (): Promise<void> => {
    try {
      const listOfPokemon = await axios.get(
        pokeApiUrl
      );
      setPokemonList(listOfPokemon.data.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  const viewNextPokemons = async (): Promise<void> => {
    try {
      console.log('viewNextPokemons');
      let response = await axios.get(pokeApiUrl);
      console.log('response',response)
      const nextUrl = response.data.next;
      if (nextUrl) {
        setPokeApiUrl(nextUrl);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  const viewPreviousPokemons = async (): Promise<void> => {
    try { 
      console.log('viewPreviousPokemons');
      let response = await axios.get(pokeApiUrl);
      const previousUrl = response.data.previous;
      if (previousUrl) {
        setPokeApiUrl(previousUrl);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
    }
  }

  /**
   * Changes the number of pokemon showed per page.
   * @param numberPerPage number Of Pokemon per page
   */
  const changeNumberPerPage = async (numberPerPage: number): Promise<void> => {
    try {
      const newPokeApiUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${numberPerPage}`;
      setPokeApiUrl(newPokeApiUrl);
      setNumberOfPokemonPerPage(numberPerPage);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <PokedexContext.Provider
      value={{
        pokemonList,
        setPokemonList,
        viewNextPokemons,
        viewPreviousPokemons,
        changeNumberPerPage
      }}
    >
      {props.children}
    </PokedexContext.Provider>
  );
};

export default PokedexProvider;