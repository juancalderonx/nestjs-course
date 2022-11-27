const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`El método ${ memberName } está deprecado por: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    @Deprecated('Ya no queremos que ningún pokemon grite jeje')
    scream() {
        console.log(`¡I'm screaming my name ${this.name}!`);
    }

    scream2() {
        console.log(`Aquí ya no gritamos :3 Mi nombre es: ${this.name}`);
    }

    speak() {
        console.log(`Im speaking with you, I will speak my name two times. ${this.name} and ${this.name}`);
    }

}

export const charmander = new Pokemon(4, 'Charmander');

charmander.speak()