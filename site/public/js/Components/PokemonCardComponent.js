import Component from "./Component.js";

class PokemonCardComponent extends Component {
  pokemonObject;
  onClick;

  constructor(parentElement, className, htmlTag, pokemonObject, onClick) {
    super(parentElement, className, htmlTag);

    this.pokemonObject = pokemonObject;
    this.onClick = onClick;
    this.pokemonObject.htmlElement = this.element;

    this.generateHTML();
    this.generateTypes();
    this.addEventListener();
    this.assesOwned();
  }

  generateHTML() {
    let hp;
    let attack;

    this.pokemonObject.stats.forEach((stat) => {
      if (stat.name === "hp") {
        hp = stat.value;
      }
      if (stat.name === "attack") {
        attack = stat.value;
      }
    });

    this.element.innerHTML = `
        <div class="pokemon-card__hp">
          <span class="hp-number">${hp}</span>
          HP
        </div>
        <img
          src="img/ground.png"
          alt=""
          class="pokemon-card__img--ground"
        />
        <img src="${this.pokemonObject.img}" alt="" class="pokemon-card__img" />
        
        <section class="pokemon-card__main-info">
          <h2 class="pokemin-card__name">${this.pokemonObject.name}</h2>
          <ul class="pokemon-card__type-holder">
          </ul>
        </section>
        <ul class="pokemon-card__stats">
          <li class="pokemon-stats-item">
            <div class="stat-name">ID</div>
            <div class="stat-value">${this.pokemonObject.id}</div>
          </li>
          <li class="pokemon-stats-item">
            <div class="stat-name">Abilities</div>
            <div class="stat-value">${this.pokemonObject.abilities}</div>
          </li>
          <li class="pokemon-stats-item">
            <div class="stat-name">Attack</div>
            <div class="stat-value">${attack}</div>
          </li> 
        </ul>
        <button class="pokemon-card__overlay"><i class="fa fa-times-circle"></i></button>
    `;
  }

  generateTypes() {
    const typeHolder = this.element.querySelector(".pokemon-card__type-holder");

    this.pokemonObject.types.forEach((type) => {
      const typeElement = document.createElement("li");

      typeElement.textContent = type;
      typeElement.className = `type ${type}`;

      typeHolder.append(typeElement);
    });
  }

  addEventListener() {
    const button = this.element.querySelector("button");
    button.addEventListener("click", () => {
      this.onClick();
    });
  }

  assesOwned() {
    const button = this.element.querySelector("button");
    if (this.pokemonObject.doWeHaveIt) {
      this.element.classList.add("pokemon-card--archived");
      button.classList.add("pokemon-card__overlay--archived");
    } else {
      this.element.classList.remove("pokemon-card--archived");
      button.classList.remove("pokemon-card__overlay--archived");
    }
  }
}

export default PokemonCardComponent;
