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
          <div class="details-holder__info-holder">
            <h2 class="details-holder__name"> ${
              this.pokemonData.name[0].toUpperCase() +
              this.pokemonData.name.substring(1)
            }</h2>
            <section class="details-holder__item details-holder__item--types">
              <h3 class="title">Types</h3>
              <ul class="list"></ul>
            </section>
            <section class="details-holder__item details-holder__item--stats">
              <h3 class="title">Stats</h3>
              <ul class="list"></ul>
            </section>
            <section class="details-holder__item details-holder__item--moves">
              <h3 class="title">Moves</h3>
              <ul class="list"></ul>
            </section>
          </div>
        </div>
        <div class="details-holder__controls"></div>
    `;
  }
}

export default PokemonDetailsMainComponent;
