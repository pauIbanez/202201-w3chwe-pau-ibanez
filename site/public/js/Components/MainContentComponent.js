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
          <img src="" alt="" class="list_item" />
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
