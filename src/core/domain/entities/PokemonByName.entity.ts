import { PokeApi } from "../../../config/api/PokeApi";
interface PokemonSprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  }
interface Pokemon {
    name: string;
    order: number;
    species: {
      name: string;
      url: string;
    };
    sprites: PokemonSprites;
    funFact: string[];
  }

export class PokemonByNameModel {
    private readonly id: number;
    private readonly name: string;
    private readonly frontImage: string;
    private readonly backImage: string;
    private readonly backImageShiny: string;
    private readonly frontImageShiny: string;
    private readonly funFact: string[] = [];

    constructor(pokemon: Pokemon) {
        this.id = this.extractIdFromUrl(pokemon.species.url); 
        this.name = pokemon.name;
        this.frontImage = pokemon.sprites.front_default;
        this.backImage = pokemon.sprites.back_default;
        this.frontImageShiny = pokemon.sprites.front_shiny;
        this.backImageShiny = pokemon.sprites.back_shiny;

        this.getFunFact(this.id).then((funFact) => {
          funFact.forEach((fact) => {
            this.funFact.push(fact);
          });
      });
    }
    private extractIdFromUrl(url: string): number {
      const parts = url.split('/');
      return parseInt(parts[parts.length - 2], 10);
    }
    private async getFunFact(id:number): Promise<string[]>{
      const PokeApiAxios = new PokeApi();
      const response = await PokeApiAxios.getfunfactPokemon(id);
      return response;
    }
    public toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            frontImage: this.frontImage,
            backImage: this.backImage,
            frontImageShiny: this.frontImageShiny,
            backImageShiny: this.backImageShiny,
            funFact: this.funFact,
        };
    }

}