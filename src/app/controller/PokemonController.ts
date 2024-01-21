import { Request, Response } from "../../config/server/http";
import { GetListPokemonUseCase } from '../../core/application/pokemon/GetListPokemonUseCase';
import { PokemonRepository } from "../../core/domain/repositories/PokemonRepository";
export class PokemonController {
    constructor(
        public readonly pokemonRepository : PokemonRepository
    ) {}
    public async getListPokemon(request: Request, response: Response) {
        try {
            const { offset, limit } = request.query; 
            const getListPokemonUseCase : GetListPokemonUseCase = new GetListPokemonUseCase(this.pokemonRepository);
            const list = await getListPokemonUseCase.getPokemonList(Number(offset), Number(limit)) 
            if(!list) { 
                return response.status(404).json({message: 'Pokemon list not found', error: list});
            }
            response.status(200).json({
                success: true,
                message: 'Pokemon list',
                data: list
            })
        
        }
        catch(error) {
            console.log(error);
        }

    }
    public getPokemonbyName(request: Request, response: Response) {
        response.status(200).json({message: 'Hello world'})
    }
}