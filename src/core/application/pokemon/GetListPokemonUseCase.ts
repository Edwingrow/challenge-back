import { PokemonListNotFound } from "../../domain/exceptions/PokemonListNotFound";
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";

export class GetListPokemonUseCase {
    constructor(
        public readonly pokemonRepository: PokemonRepository
    ) { }
    public async getPokemonList(offset:number, limit:number) {
        const pokemonList = await this.pokemonRepository.getPokemonList(offset, limit);
        if(!pokemonList) {
            throw new PokemonListNotFound();
        }
        return pokemonList;
    }
}