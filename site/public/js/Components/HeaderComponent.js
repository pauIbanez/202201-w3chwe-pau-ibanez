import Component from "./Component.js";

class HeaderComponent extends Component {
  data;

  constructor(parentElement, className, htmlTag, data) {
    super(parentElement, className, htmlTag);

    this.data = data;

    this.generateHTML();
    this.generateNav();
    this.generateInfo();
  }

  generateHTML() {
    this.element.innerHTML = `
      <nav class="main-nav"></nav>
      `;
  }

  generateNav() {
    const nav = this.element.querySelector("nav");

    this.data.nav.navItems.forEach((navItem) => {
      const element = document.createElement(this.data.nav.htmlTag);
      element.innerHTML = `<img src="img/header-icon.png" />`;

      const navElement = document.createElement("span");

      element.className = this.data.nav.class;
      element.href = `${navItem.src}.html`;

      if (navItem.selected) {
        element.classList.add(this.data.nav.selectedClass);
      }

      navElement.textContent = navItem.text;

      element.append(navElement);
      nav.append(element);
    });
  }

  generateInfo() {
    this.element.innerHTML += this.data.info.content;
  }
}

export default HeaderComponent;
