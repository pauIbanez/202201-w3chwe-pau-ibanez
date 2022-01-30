import Component from "./Component.js";

class PokemonDetailsMainComponent extends Component {
  pokemonData;

  constructor(parentElement, className, htmlTag, pokemonData) {
    super(parentElement, className, htmlTag);

    this.pokemonData = pokemonData;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
          <header class="main-content__content-header">
        <h1 class="main-content__title">Pokémon Details</h1>
        <p class="main-content__desc">
          Here you han find more dtails about your favourite pokémons!
        </p>
      </header>
      <section class="main-content__pokemon-info">
      <div class="main-content__list-container"> asdas
        </div>
      </section>
    `;
  }
}

export default PokemonDetailsMainComponent;
