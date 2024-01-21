import { pokemonList } from "../entities/PokemonModel";

export interface PokemonRepository {
    getPokemonList: (offset: number, limit: number) => Promise<pokemonList>;
    getPokemonByName: (name: string) => Promise<pokemonList | null>;
}