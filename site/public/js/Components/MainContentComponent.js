import Component from "./Component.js";

class MainContentComponent extends Component {
  data;

  constructor(parentElement, className, htmlTag, data) {
    super(parentElement, className, htmlTag);

    this.data = data;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <header class="main-content__content-header">
        <h1 class="main-content__title">${this.data.title}</h1>
        <p class="main-content__desc">
          ${this.data.description}
        </p>
      </header>
      <section class="main-content__content-list">
        <div class="main-content__list-container">
          <article class="pokemon-card">
      <div class="pokemon-card__hp">
        <span class="hp-number">160</span>
        HP
      </div>
      <img src="img/snorlax.png" alt="" class="pokemon-card__img" />
      <img
        src="img/pokemonground.png"
        alt=""
        class="pokemon-card__img--ground"
      />
      <section class="pokemon-card__main-info">
        <h2 class="pokemin-card__name">Snorlax</h2>
        <ul class="pokemon-card__type-holder">
          <li class="type">Normal</li>
          <li class="type">Fire</li>
        </ul>
      </section>
      <section class="pokemon-card__stats">
        <ul>
          <li class="pokemon-stats-item">
            <div class="stat-name">ID</div>
            <div class="stat-value">143</div>
            <div class="stat-name">Abilities</div>
            <div class="stat-value">Immunity / Thick-fat</div>
            <div class="stat-name">Atack</div>
            <div class="stat-value">110</div>
          </li>
        </ul>
      </section>
    </article>
        </div>
        <div class="main-content__controls">
          <button class="button">&lt;&lt; Previous</button>
          <div class="position">80/10000</div>
          <button class="button">Next >></button>
        </div>
      </section>
    `;
  }
}

export default MainContentComponent;
