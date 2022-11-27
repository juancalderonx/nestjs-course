
export const MyDecorator = () => {
    return ( target: Function ) => {
        return NewPokemon;
    }
}

export class NewPokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    scream() {
        console.log(`Test Scream in NewPokemon`);
    }

    speak() {
        console.log(`Test Speak in NewPokemon`);
    }

}

@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    scream() {
        console.log(`¡I'm screaming my name ${this.name}!`);
    }

    speak() {
        console.log(`Im speaking with you, I will speak my name two times. ${this.name} and ${this.name}`);
    }

}

export const charmander = new Pokemon(4, 'Charmander');