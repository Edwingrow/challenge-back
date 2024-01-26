import { PokeApi } from '../../../config/api/PokeApi';
import { PokemonByNameModel } from '../../domain/entities/PokemonByName.entity';
import { PokemonModel } from '../../domain/entities/PokemonModel.entity';
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";

export class PokemonRepositoryImpl implements PokemonRepository {
  
    

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
        return pokemonListData;
    }

    public async getPokemonByName(name: string) : Promise<any>{
        const PokeApiAxios = new PokeApi();
        const dataApi = await PokeApiAxios.getPokemonByName(name);
        const PokemonData: PokemonByNameModel = new PokemonByNameModel(dataApi);
        const data = PokemonData.toJSON();
        let species = dataApi.species.url.split('/')[6];
        await PokeApiAxios.getfunfactPokemon(species).then((funFact: any) => {
            data.funFact = funFact;
        });
       
        return data; 
    }
}