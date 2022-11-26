
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

}

export const pokemon_1 = new Pokemon(1, 'Charmander')
