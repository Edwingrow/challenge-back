import { PokeApi } from '../../../config/api/PokeApi';
import { PokemonModel } from '../../domain/entities/PokemonModel';
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";

export class PokemonRepositoryImpl implements PokemonRepository {
  
    getPokemonByName!: (name: string) => Promise<PokemonModel | null>; 

    public async getPokemonList(offset:number, limit:number) : Promise<any>{
        const listURL= [] as any[]
        
        const PokeApiAxios = new PokeApi();
        const FirstListPokemon = await PokeApiAxios.getPokemonList(offset, limit);
        FirstListPokemon.forEach(async (pokemon:any) => {
            listURL.push(pokemon.url)
        });
        const pokemonListData = await Promise.all(listURL.map(async (pokemon: any) => {
            const data = await PokeApiAxios.getPokemonByName(pokemon.split('/')[6]);
            const PokemonData: PokemonModel = new PokemonModel(data);
            return PokemonData.toJSON();

        }))
         await Promise.all(listURL.map(async (pokemon: any) => {
            const data = await PokeApiAxios.getPokemonByName(pokemon.split('/')[6]);
            const PokemonData: PokemonModel = new PokemonModel(data);
            PokemonData.toJSON().funFact
        }));
        return pokemonListData;
    }
}