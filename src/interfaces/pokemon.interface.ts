export interface Pokemon {
    name: string,
    url: string,
    pokemonId?: number,
    pokemonImage?: string,
    count?: number
}

export interface PokemonDetails {
    pokemonName: string,
    pokemonImage: string,
    pokemonId: number
}