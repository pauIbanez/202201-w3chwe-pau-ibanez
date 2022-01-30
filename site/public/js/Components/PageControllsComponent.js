import Component from "./Component.js";

class PageControllsComponent extends Component {
  controllsData;

  constructor(parentElement, className, htmlTag, controllsData) {
    super(parentElement, className, htmlTag);

    this.controllsData = controllsData;

    this.generateHTML();
    this.generateEventListeners();
  }

  generateHTML() {
    this.element.innerHTML = `
      <button class="button">&lt;&lt; Previous</button>
      <div class="position">80/10000</div>
      <button class="button">Next >></button>
    `;
  }

  generateEventListeners() {
    const previousButton = this.element.querySelector("button:nth-child(1)");

    if (this.controllsData.previous === null) {
      previousButton.disabled = true;
    } else {
      previousButton.addEventListener("click", this.controllsData.previous);
    }

    const nextButton = this.element.querySelector("button:nth-child(3)");
    if (this.controllsData.next === null) {
      nextButton.disabled = true;
    } else {
      nextButton.addEventListener("click", this.controllsData.next);
    }
  }
}

export default PageControllsComponent;
