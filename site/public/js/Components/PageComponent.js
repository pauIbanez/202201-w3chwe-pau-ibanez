import Component from "./Component.js";
import FooterComponent from "./FooterComponent.js";
import HeaderComponent from "./HeaderComponent.js";
import MainContentComponent from "./MainContentComponent.js";

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

  currentPage;

  mainData = [
    {
      title: "All Pokémon",
      description: `Pokémon are the creatures that inhabit the world of the Pokémon games.
          They can be caught using Pokéballs and trained by battling with other
          Pokémon. Each Pokémon belongs to a specific species but may take on a
          variant which makes it differ from other Pokémon of the same species,
          such as base stats, available abilities and typings.`,
    },
    {
      title: "My Pokémon",
      description: `Pokémon are the creatures that inhabit the world of the Pokémon games.
          They can be caught using Pokéballs and trained by battling with other
          Pokémon. Each Pokémon belongs to a specific species but may take on a
          variant which makes it differ from other Pokémon of the same species,
          such as base stats, available abilities and typings.`,
    },
    {
      title: "Pokémon Details",
      description: `Pokémon are the creatures that inhabit the world of the Pokémon games.
          They can be caught using Pokéballs and trained by battling with other
          Pokémon. Each Pokémon belongs to a specific species but may take on a
          variant which makes it differ from other Pokémon of the same species,
          such as base stats, available abilities and typings.`,
    },
  ];

  footerData = {
    img: "img/pokemon-logo.svg",
    text: "Propperty of The Pokémon Company",
    media: [
      { img: "", link: "" },
      { img: "", link: "" },
      { img: "", link: "" },
      { img: "", link: "" },
      { img: "", link: "" },
    ],
    copyright:
      "©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.",
  };

  constructor() {
    super(document.body, "page-holder", "div");

    this.buildHeader();
    this.buildMainContent();
    this.buildFooter();
  }

  buildHeader() {
    const page = window.location.pathname.split("/").pop();

    const newHeaderData = this.headerData;

    this.headerData.nav.navItems.forEach((navItem, index) => {
      if (navItem.src !== "") {
        if (`${navItem.src}.html` === `${page}`) {
          newHeaderData.nav.navItems[index].selected = true;
          this.currentPage = navItem.text;
        }
      } else if (`${navItem.src}` === `${page}`) {
        newHeaderData.nav.navItems[index].selected = true;
        this.currentPage = navItem.text;
      }
    });

    new HeaderComponent(this.element, "main-header", "header", newHeaderData);
  }

  buildMainContent() {
    const currMainData = this.mainData.find(
      (mainData) => mainData.title === this.currentPage
    );

    new MainContentComponent(
      this.element,
      "main-content",
      "main",
      currMainData
    );
  }

  buildFooter() {
    new FooterComponent(this.element, "main-footer", "footer", this.footerData);
  }
}

export default PageComponent;
