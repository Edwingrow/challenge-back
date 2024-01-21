export class PokemonListNotFound extends Error {
  constructor() {
    super('Pokemon list not found');
  }
}