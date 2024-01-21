import { PokemonModel } from "../entities/PokemonModel";

export interface PokemonRepository {
    getPokemonList: (offset: number, limit: number) => Promise<PokemonModel>;
    getPokemonByName: (name: string) => Promise<PokemonModel | null>;
}