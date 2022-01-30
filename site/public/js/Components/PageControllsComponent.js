import Component from "./Component.js";

class PageControllsComponent extends Component {
  controllsData;

  constructor(parentElement, className, htmlTag, controllsData) {
    super(parentElement, className, htmlTag);

    this.controllsData = controllsData;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <button class="button">&lt;&lt; Previous</button>
      <div class="position">80/10000</div>
      <button class="button">Next >></button>
    `;
  }
}

export default PageControllsComponent;
