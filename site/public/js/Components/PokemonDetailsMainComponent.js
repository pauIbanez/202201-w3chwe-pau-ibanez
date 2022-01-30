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
        <div class="details-holder__details">
          <div class="details-holder__img-holder">
            <img class="details-holder__ground"src="../img/ground.png" />
            <img class="details-holder__img"src="${this.pokemonData.img}" />
          </div>
          <div class="details-holder__info-holder"></div>
        </div>
        <div class="details-holder__controls"></div>
    `;
  }
}

export default PokemonDetailsMainComponent;
