import { Enviroment } from '../constants/Enviroments';
import { AxiosAdapter } from '../helpers/axios/AxiosAdapter';

export class PokeApi {
   
    
    constructor(
        private readonly baseURL: string = Enviroment.getEnv('URL_POKE_API') || ''
    ) {
       
    }
    async getPokemonList(offset:number, limit:number) {
        
        try {
            const AxiosAdapterInstance = new AxiosAdapter(this.baseURL);
            const response = await AxiosAdapterInstance.get(`/pokemon?offset=${offset}&limit=${limit}`);
            return response.data.results
            
        }
        catch(error) {
            console.log(error);
        }
    }
    async getPokemonByName(name:string) {
       try {
        const AxiosAdapterInstance = new AxiosAdapter(this.baseURL);
         const response = await AxiosAdapterInstance.get(`/pokemon/${name}`);
        return response.data;
       }
         catch(error) {
              console.log(error);
         }
    }

    async getfunfactPokemon(id:number){
        try {
            const AxiosAdapterInstance = new AxiosAdapter(this.baseURL);
            const response = await AxiosAdapterInstance.get(`/pokemon-species/${id}`);
            const spanishDescriptions = response.data.flavor_text_entries
            .filter((description: any) => description.language.name === 'es')
            .map((description: any) => description.flavor_text);
            return spanishDescriptions;
        }
        catch(error) {
            console.log(error);
        }
    }
}