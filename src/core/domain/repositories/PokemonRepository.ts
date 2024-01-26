import { PokemonModel } from "../entities/PokemonModel.entity";

export interface PokemonRepository {
    getPokemonList: (offset: number, limit: number) => Promise<PokemonModel>;
    getPokemonByName: (name: string) => Promise<PokemonModel | null>;
}