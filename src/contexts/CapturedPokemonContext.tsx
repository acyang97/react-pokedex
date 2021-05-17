import React, { createContext, useState } from "react";
import { Pokemon } from "../interfaces/pokemon.interface";

type setValue = (value: any) => void;

interface CapturedPokemonContextInterface {
  capturedPokemonList: Pokemon[];
  setCapturedPokemonList: setValue;
}

export const CapturedPokemonContext =
  createContext<CapturedPokemonContextInterface | any | null>(null);

const CapturedPokemonContextProvider: React.FC = (props) => {
  const [capturedPokemonList, setCapturedPokemonList] = useState<Pokemon[]>([]);

  const addToCapturedPokemonList = (
    pokemonId: number,
    pokemonName: string,
    pokemonUrl: string,
    pokemonImage: string
  ): void => {
    let tempCaptured: Pokemon[] = [...capturedPokemonList];
    let pokemonToBeAdded: Pokemon | undefined = tempCaptured.find(pokemon => pokemon.pokemonId === pokemonId);
    if (pokemonToBeAdded) {
      const indexOfPokemonToBeAdded: number = tempCaptured.indexOf(pokemonToBeAdded);
      let tempPokemon: Pokemon = {...pokemonToBeAdded};
      if (tempPokemon.count) {
        tempPokemon.count = tempPokemon.count + 1;
      }
      tempCaptured[indexOfPokemonToBeAdded] = tempPokemon;
    } else {
      tempCaptured.push({
        name: pokemonName,
        url: pokemonUrl,
        pokemonId,
        pokemonImage,
        count: 1
      });
    }
    setCapturedPokemonList(tempCaptured);
  };

  const releaseAllPokemon = (pokemonId: number): void => {
    let tempCapturedPokemon: Pokemon[] = [...capturedPokemonList];
    const remainingPokemons = tempCapturedPokemon.filter(pokemon => {
      return pokemon.pokemonId !== pokemonId;
    });
    setCapturedPokemonList(remainingPokemons);
  }

  const releaseOnePokemon = (pokemonId: number): void => {
    let tempCapturedPokemon: Pokemon[] = [...capturedPokemonList];
    let pokemonToBeReleased: Pokemon = tempCapturedPokemon.filter(pokemon => {
      return pokemon.pokemonId === pokemonId;
    })[0];
    const indexOfPokemonToBeReleased = tempCapturedPokemon.indexOf(pokemonToBeReleased);
    if (pokemonToBeReleased.count === 1) {
      releaseAllPokemon(pokemonId);
    } else {
      if (pokemonToBeReleased.count) {
        pokemonToBeReleased.count = pokemonToBeReleased.count - 1;
      }
      tempCapturedPokemon[indexOfPokemonToBeReleased] = pokemonToBeReleased;
      setCapturedPokemonList(tempCapturedPokemon);
    }
  }

  return (
    <CapturedPokemonContext.Provider
      value={{
        capturedPokemonList,
        setCapturedPokemonList,
        addToCapturedPokemonList,
        releaseAllPokemon,
        releaseOnePokemon
      }}
    >
      {props.children}
    </CapturedPokemonContext.Provider>
  );
};

export default CapturedPokemonContextProvider;
