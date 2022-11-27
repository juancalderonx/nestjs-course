import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeAPI.adapter";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  
    constructor(
        public readonly id: number, 
        public name: string,
        
        // Dependency injection
        private readonly http : HttpAdapter

    ) {}

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves() {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }

}

const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFetchAdapter();

export const pokemon1 = new Pokemon( 4, 'Charmander', pokeApiAxios);
export const pokemon2 = new Pokemon( 4, 'Charmander', pokeApiFetch);


pokemon1.getMoves();
pokemon2.getMoves();


