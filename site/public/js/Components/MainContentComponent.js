import Component from "./Component.js";

class MainContentComponent extends Component {
  textData;

  constructor(parentElement, className, htmlTag, textData, mainContentsClass) {
    super(parentElement, className, htmlTag);

    this.textData = textData;
    this.mainContentsClass = mainContentsClass;
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
        <div class="${this.mainContentsClass}">
        </div>
      </section>
    `;
  }
}

export default MainContentComponent;
