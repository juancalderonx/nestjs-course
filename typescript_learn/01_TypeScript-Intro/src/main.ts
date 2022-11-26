import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import { name } from './bases/01-types'
import { pokemon4 } from './bases/05-injection'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hola ${name}, el pokemon asignado para ti es: ${pokemon4.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`


console.log(pokemon4);
pokemon4.speak()
pokemon4.scream()

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
