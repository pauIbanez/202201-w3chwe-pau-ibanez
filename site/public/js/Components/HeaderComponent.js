class HeaderComponent extends Comment {
  data;

  constructor(parentElement, className, htmlTag, data) {
    super(parentElement, className, htmlTag);

    this.data = data;
  }

  generateHTML() {
    this.element.innerHTML = `
      <nav class="main-nav"></nav>
      `;
  }

  generateNav() {
    const nav = this.element.querySelector("nav");
    this.data.nav.navItems.forEach((navItem) => {
      const navElement = document.createElement(this.data.nav.htmlTag);

      navElement.className = this.data.nav.class;
      if (navItem.selected) {
        navElement.classList.add(this.data.nav.selectedClass);
      }

      navElement.textContent = navItem.text;

      nav.append(navElement);
    });
  }

  generateInfo() {
    this.element.innerHTML += this.data.info.content;
  }
}
