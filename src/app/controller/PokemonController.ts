import { Request, Response } from "../../config/server/http";
import { GetListPokemonUseCase } from '../../core/application/pokemon/GetListPokemonUseCase';
import { GetPokemonByNameUseCase } from "../../core/application/pokemon/GetPokemonByNameUseCase";
import { PokemonRepository } from "../../core/domain/repositories/PokemonRepository";
export class PokemonController {
    constructor(
        public readonly pokemonRepository : PokemonRepository
    ) {}
    public async getListPokemon(request: Request, response: Response) {
        try {
            const { offset, limit } = request.query; 
            const getListPokemonUseCase : GetListPokemonUseCase = new GetListPokemonUseCase(this.pokemonRepository);
            const results = await getListPokemonUseCase.getPokemonList(Number(offset), Number(limit)) 
            if(!results) { 
                return response.status(404).json({message: 'Pokemon list not found', error: true});
            }
            response.status(200).json({results})
        
        }
        catch(error) {
            console.log(error);
        }

    }
    public async getPokemonbyName(request: Request, response: Response) {
        {
            try {
                const { name } = request.params; 
                const getPokemonByNameUseCase : GetPokemonByNameUseCase = new GetPokemonByNameUseCase(this.pokemonRepository)
                const results = await getPokemonByNameUseCase.getPokemonByName(name)
                if(!results) { 
                    return response.status(404).json({message: 'Pokemon not found', error: true});
                }
                response.status(200).json(results)
            
            }
            catch(error) {
                console.log(error);
            }
        }
    }
}