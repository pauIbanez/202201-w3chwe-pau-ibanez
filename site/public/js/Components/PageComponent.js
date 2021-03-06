import PokemonData from "../PokemonData.js";
import Component from "./Component.js";
import FooterComponent from "./FooterComponent.js";
import HeaderComponent from "./HeaderComponent.js";
import MainContentComponent from "./MainContentComponent.js";
import PageControllsComponent from "./PageControllsComponent.js";
import PokemonCardComponent from "./PokemonCardComponent.js";
import PokemonDetailsMainComponent from "./PokemonDetailsMainComponent.js";

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
          src: "pokemondetails",
        },
      ],
    },

    info: {
      content: `<a href="https://www.pokemon.com" target="_blank" class="official-link">Official Pokémon Website <img src="img/extLink.png"></a>`,
    },
  };

  currentPage;

  pokemonListData;
  pokemonCards = [];

  myPokemonListData;

  mainTextData = [
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

    this.assesParams();
    this.buildHeader();
  }

  async assesParams() {
    const params = new URLSearchParams(window.location.search);
    const pokemonID = params.get("id");

    const myPokemonListResponse = await fetch(
      "https://w3chwe-my-pokemon-api.herokuapp.com/pokemon"
    );

    const myPokemonList = await myPokemonListResponse.json();
    this.myPokemonListData = myPokemonList;

    // if (window.location.pathname !== "/pokemondetails") {
    //   if (pokemonID === null) {
    //     this.getFirstPokemonList();
    //   } else {
    //     const a = 3;
    //     window.location.href = `pokemondetails${window.location.search}`;
    //   }
    // } else {
    //   this.buildPokemonDetails(pokemonID);
    // }

    if (window.location.pathname !== "/pokemondetails.html") {
      if (pokemonID === null) {
        this.getFirstPokemonList();
      } else {
        window.location.href = `pokemondetails.html${window.location.search}`;
      }
    } else {
      this.buildPokemonDetails(pokemonID);
    }
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

    // Ignorad esto por ahora, en local necesito el navImen.src sin .html y en netlify con!
    // this.headerData.nav.navItems.forEach((navItem, index) => {
    //   if (navItem.src !== "") {
    //     if (`${navItem.src}` === `${page}`) {
    //       newHeaderData.nav.navItems[index].selected = true;
    //       this.currentPage = navItem.text;
    //       const a = 3;
    //     }
    //   } else if (`${navItem.src}` === `${page}`) {
    //     newHeaderData.nav.navItems[index].selected = true;
    //     this.currentPage = navItem.text;
    //   }
    // });

    new HeaderComponent(this.element, "main-header", "header", newHeaderData);
  }

  async getFirstPokemonList() {
    const pokemonListResponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=8"
    );

    const pokemonList = await pokemonListResponse.json();
    this.pokemonListData = pokemonList;
    this.buildMainContent();
  }

  async buildMainContent() {
    this.element.querySelector("main")?.remove();
    this.element.querySelector("footer")?.remove();

    const currMainData = this.mainTextData.find(
      (mainTextDataItem) => mainTextDataItem.title === this.currentPage
    );

    const pageControllData = {};
    pageControllData.maxPokemons = this.pokemonListData.count;

    // eslint-disable-next-line prefer-destructuring
    pageControllData.currShown = this.pokemonListData.next
      .split("=")[1]
      .split("&")[0];

    if (this.pokemonListData.previous !== null) {
      pageControllData.previous = async () => {
        const scrollPosition = document.scrollingElement.scrollTop;
        const newPokeResponse = await fetch(this.pokemonListData.previous);
        const responseBody = await newPokeResponse.json();

        this.pokemonListData = responseBody;
        this.buildMainContent();
        setTimeout(() => {
          document.scrollingElement.scrollTop = scrollPosition;
        }, 20);
      };
    } else {
      pageControllData.previous = null;
    }

    if (this.pokemonListData.next !== null) {
      pageControllData.next = async () => {
        const scrollPosition = document.scrollingElement.scrollTop;
        const newPokeResponse = await fetch(this.pokemonListData.next);
        const responseBody = await newPokeResponse.json();

        this.pokemonListData = responseBody;
        this.buildMainContent();
        setTimeout(() => {
          document.scrollingElement.scrollTop = scrollPosition;
        }, 20);
      };
    } else {
      pageControllData.next = null;
    }

    const pokemonListComponent = new MainContentComponent(
      this.element,
      "main-content",
      "main",
      currMainData,
      "main-content__list-container"
    );

    const controllsParent = pokemonListComponent.element.querySelector(
      ".main-content__content-list"
    );

    if (this.currentPage === "All Pokémon") {
      new PageControllsComponent(
        controllsParent,
        "main-content__controls",
        "div",
        pageControllData
      );
    }

    if (this.currentPage === "All Pokémon") {
      this.populatePokeList();
    }
    if (this.currentPage === "My Pokémon") {
      this.populateMyPokeList();
    }
    this.buildFooter();
  }

  async populatePokeList() {
    const pokemonListHolder = this.element.querySelector(
      ".main-content__list-container"
    );
    pokemonListHolder.innerHTML = "";

    this.pokemonListData.results.forEach(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();

      const formattedPokemonObject = new PokemonData(
        pokemonData,
        this.myPokemonListData
      );

      const onClick = async () => {
        if (formattedPokemonObject.doWeHaveIt) {
          const resp = await fetch(
            `https://w3chwe-my-pokemon-api.herokuapp.com/pokemon/${formattedPokemonObject.id}`,
            {
              method: "DELETE",
            }
          );
          if (resp.status === 200) {
            formattedPokemonObject.htmlElement
              .querySelector("button")
              .classList.remove("pokemon-card__overlay--archived");

            formattedPokemonObject.htmlElement.querySelector(
              ".pokemon-card__img"
            ).src = formattedPokemonObject.img;

            formattedPokemonObject.shiny = false;

            formattedPokemonObject.htmlElement.classList.remove(
              "pokemon-card--archived"
            );
            formattedPokemonObject.doWeHaveIt = false;
          }
        } else {
          const resp = await fetch(
            `https://w3chwe-my-pokemon-api.herokuapp.com/pokemon`,
            {
              method: "POST",
              body: JSON.stringify(formattedPokemonObject),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (resp.status === 201) {
            formattedPokemonObject.htmlElement
              .querySelector("button")
              .classList.add("pokemon-card__overlay--archived");

            formattedPokemonObject.htmlElement.classList.add(
              "pokemon-card--archived"
            );
            formattedPokemonObject.doWeHaveIt = true;
          }
        }
      };

      this.pokemonCards.push(
        new PokemonCardComponent(
          pokemonListHolder,
          "pokemon-card",
          "article",
          formattedPokemonObject,
          onClick
        )
      );
    });

    window.scrollY = this.scrollPosition;
  }

  async populateMyPokeList() {
    const pokemonListHolder = this.element.querySelector(
      ".main-content__list-container"
    );

    pokemonListHolder.innerHTML = "";

    this.myPokemonListData.forEach((pokemon) => {
      const onClick = async () => {
        const resp = await fetch(
          `https://w3chwe-my-pokemon-api.herokuapp.com/pokemon/${pokemon.id}`,
          {
            method: "DELETE",
          }
        );

        if (resp.status === 200) {
          // eslint-disable-next-line no-param-reassign
          pokemon.doWeHaveIt = false;
          pokemon.htmlElement.remove();
        }
      };
      // eslint-disable-next-line no-param-reassign
      pokemon.doWeHaveIt = true;
      new PokemonCardComponent(
        pokemonListHolder,
        "pokemon-card",
        "article",
        pokemon,
        onClick
      );
    });
  }

  async buildPokemonDetails(pokemonId) {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );

    const pokemonInfo = await pokemonResponse.json();
    this.element.innerHTML += "";

    const formattedPokemonObject = new PokemonData(
      pokemonInfo,
      this.myPokemonListData
    );
    const currMainData = this.mainTextData.find(
      (mainTextDataItem) => mainTextDataItem.title === this.currentPage
    );

    const mainContent = new MainContentComponent(
      this.element,
      "main-content",
      "main",
      currMainData,
      "details-holder"
    );

    const detailsHolder = mainContent.element.querySelector(".details-holder");
    new PokemonDetailsMainComponent(
      detailsHolder,
      "details-holder",
      "article",
      formattedPokemonObject
    );

    window.scrollY = this.scrollPosition;

    this.buildFooter();
  }

  buildFooter() {
    new FooterComponent(this.element, "main-footer", "footer", this.footerData);
  }
}

export default PageComponent;
