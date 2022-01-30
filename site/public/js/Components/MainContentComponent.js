import Component from "./Component.js";

class MainContentComponent extends Component {
  textData;

  constructor(parentElement, className, htmlTag, textData) {
    super(parentElement, className, htmlTag);

    this.textData = textData;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <header class="main-content__content-header">
        <h1 class="main-content__title">${this.textData.title}</h1>
        <p class="main-content__desc">
          ${this.textData.description}
        </p>
      </header>
      <section class="main-content__content-list">
        <div class="main-content__list-container">
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
