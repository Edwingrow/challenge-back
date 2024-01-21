import { PokeApi } from "../../../config/api/PokeApi";

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface PokemonMove {
  move: {
    name: string;
  };
}
interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonSprites {
  front_default: string;
}

interface Pokemon {
  name: string;
  order: number;
  moves: PokemonMove[];
  past_types: string[];
  species: {
    name: string;
    url: string;
  };
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
  height: number;
  funFact: string[];
}



export class PokemonModel {
  private readonly id: number;
  private readonly name: string;
  private readonly types: string[];
  private readonly image: string;
  private readonly stats: {name:string; base_stat:number}[];
  private readonly moves: string[];
  private readonly weight: number;
  private readonly height: number;
  private readonly funFact: string[] = [];

  constructor(pokemon: Pokemon) {
    this.id = this.extractIdFromUrl(pokemon.species.url);  
    this.name = pokemon.name;
    this.types = pokemon.types.map((type) => type.type.name);
    this.image = pokemon.sprites.front_default;
    this.stats = pokemon.stats.map((stat) => ({
      name: stat.stat.name,
      base_stat: stat.base_stat,
    }));
    this.moves = pokemon.moves.map((move) => move.move.name);
    this.weight = pokemon.weight;
    this.height = pokemon.height;
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
      weight: this.weight,
      height: this.height,
      types: this.types,
      image: this.image,
      stats: this.stats,
      moves: this.moves.map(move => ({ name: move })),
      funFact: this.funFact,
    };
  }
}


