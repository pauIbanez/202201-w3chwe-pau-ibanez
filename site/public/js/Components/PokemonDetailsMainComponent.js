import Component from "./Component.js";

class PokemonDetailsMainComponent extends Component {
  pokemonData;

  constructor(parentElement, className, htmlTag, pokemonData) {
    super(parentElement, className, htmlTag);

    this.pokemonData = pokemonData;

    this.generateHTML();
    this.generateLists();
    this.generateButtons();
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
        <div class="details-holder__controls">
        
        </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  generateLists() {
    const typesHolder = this.element.querySelector(
      ".details-holder__item--types ul"
    );

    this.pokemonData.types.forEach((type) => {
      const typeElement = new Component(
        typesHolder,
        `list-item type ${type}`,
        "li"
      );
      typeElement.element.textContent = this.capitalizeFirstLetter(type);
    });

    const statsHolder = this.element.querySelector(
      ".details-holder__item--stats ul"
    );

    this.pokemonData.stats.forEach((stat) => {
      const typeElement = new Component(statsHolder, `list-item`, "li");
      typeElement.element.innerHTML = `
        <span>${this.capitalizeFirstLetter(stat.name)}</span> <span>${
        stat.value
      }</span>
      `;
    });

    const movesHolder = this.element.querySelector(
      ".details-holder__item--moves ul"
    );

    this.pokemonData.moves.forEach((move) => {
      const typeElement = new Component(movesHolder, `list-item`, "li");
      typeElement.element.textContent = this.capitalizeFirstLetter(move);
    });
  }

  assesChanges() {
    if (this.pokemonData.doWeHaveIt) {
      this.catchButton.textContent = "Remove from my list";
      this.shinyButton.disabled = false;
    } else {
      this.shinyButton.disabled = true;
      this.catchButton.textContent = "Add to my list";
    }

    if (this.pokemonData.shiny) {
      this.shinyButton.textContent = "Remove shiny";
      this.element.querySelector("img").src = this.pokemonData.shinyImg;
    } else {
      this.shinyButton.textContent = "Make shiny";
      this.element.querySelector("img").src = this.pokemonData.img;
    }
  }

  generateButtons() {
    const buttonHolder = this.element.querySelector(
      ".details-holder__controls"
    );

    const catchButton = document.createElement("button");

    const onCatchClick = async () => {
      if (this.pokemonData.doWeHaveIt) {
        const resp = await fetch(
          `https://w3chwe-my-pokemon-api.herokuapp.com/pokemon/${this.pokemonData.id}`,
          {
            method: "DELETE",
          }
        );
        if (resp.status === 200) {
          this.pokemonData.doWeHaveIt = false;
        }
      } else {
        const resp = await fetch(
          `https://w3chwe-my-pokemon-api.herokuapp.com/pokemon`,
          {
            method: "POST",
            body: JSON.stringify(this.pokemonData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (resp.status === 201) {
          this.pokemonData.doWeHaveIt = true;
        }
      }
      this.assesChanges();
    };

    catchButton.addEventListener("click", onCatchClick);
    this.catchButton = catchButton;

    buttonHolder.append(catchButton);

    const shinyButton = document.createElement("button");

    const onShinyClick = async () => {
      const resp = await fetch(
        `https://w3chwe-my-pokemon-api.herokuapp.com/pokemon/${this.pokemonData.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ shiny: !this.pokemonData.shiny }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.status === 200) {
        this.pokemonData.shiny = !this.pokemonData.shiny;
      }
      this.assesChanges();
    };

    shinyButton.addEventListener("click", onShinyClick);
    this.shinyButton = shinyButton;
    buttonHolder.append(shinyButton);

    this.assesChanges();
  }
}

export default PokemonDetailsMainComponent;
