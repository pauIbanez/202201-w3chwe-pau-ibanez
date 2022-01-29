import Component from "./Component.js";
import HeaderComponent from "./HeaderComponent.js";

class PageComponent extends Component {
  headerData = {
    nav: {
      class: "main-nav__item",
      htmlTag: "a",
      selectedClass: "main-nav__item--selected",

      navItems: [
        {
          selected: false,
          text: "All Pokémon",
          src: "",
        },

        {
          selected: false,
          text: "My Pokémon",
          src: "mypokemon",
        },

        {
          selected: false,
          text: "Pokémon Details",
          src: "placeholder",
        },
      ],
    },

    info: {
      content: `<a href="https://www.pokemon.com" target="_blank" class="official-link">Official Pokémon Website</a>`,
    },
  };

  constructor() {
    super(document.body, "page-holder", "div");

    this.buildPage();
  }

  buildPage() {
    this.buildHeader();
  }

  buildHeader() {
    const page = window.location.pathname.split("/").pop();

    this.headerData.nav.navItems.forEach((navItem) => {
      if (navItem.src !== "") {
        if (`${navItem.src}.html` === `${page}`) {
          // eslint-disable-next-line no-param-reassign
          navItem.selected = true;
        }
      } else if (`${navItem.src}` === `${page}`) {
        // eslint-disable-next-line no-param-reassign
        navItem.selected = true;
      }
    });

    new HeaderComponent(
      document.body,
      "main-header",
      "header",
      this.headerData
    );
  }
}

export default PageComponent;
