import { PokemonListNotFound } from "../../domain/exceptions/PokemonListNotFound";
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";

export class GetPokemonByNameUseCase {
    constructor(
        public readonly pokemonRepository: PokemonRepository
    
    ) { }
    public async getPokemonByName(name: string) {
        const pokemon = await this.pokemonRepository.getPokemonByName(name);
        if (!pokemon) {
            throw new PokemonListNotFound();
        }
        return pokemon;
    }
}