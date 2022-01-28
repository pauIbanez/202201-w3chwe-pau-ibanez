import Component from "./Component.js";

class PokemonCardComponent extends Component {
  pokemonObject;

  constructor(parentElement, className, htmlTag, pokemonObject) {
    super(parentElement, className, htmlTag);

    this.pokemonObject = pokemonObject;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<img style="width: 200px; height:200px;"src="${this.pokemonObject.sprites.other.home.front_default}"/>`;
  }
}

export default PokemonCardComponent;
