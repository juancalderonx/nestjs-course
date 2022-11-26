import { PokeApiAdapter } from "../api/pokeAPI.adapter";

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        
        // Dependency injection
        private readonly http : PokeApiAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves() {
        const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }

}

const pokeAPI = new PokeApiAdapter()

export const pokemon4 = new Pokemon( 4, 'Charmander', pokeAPI);
pokemon4.getMoves();


