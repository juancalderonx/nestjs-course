import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    // Getters and Setters
    get imageURL(): string {
        return `https://www.pokemon.com/us/pokedex/${this.id}`;
    }

    // Constructors
    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    // Functions

    speak() {
        console.log(`Hello, I'm a pokemon and my name is ${this.name.toUpperCase()}`);
    }

    twoNames() {
        console.log(`Print pokemons name two veces ${this.name} and ${this.name}`);
    }

    async getMoves() : Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
        return data.moves
    }

}

export const pokemon_1 = new Pokemon(1, 'Charmander')
pokemon_1.getMoves()