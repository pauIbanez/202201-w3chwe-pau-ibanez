// const container = document.querySelector("main-content__list-container");

import HeaderComponent from "./Components/HeaderComponent.js";
import PokemonCardComponent from "./Components/PokemonCardComponent.js";

const container = document.querySelector(".main-content__list-container");

const func = async () => {
  const headerData = {
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
      content: `<a class="official-link">Official Pokémon Website</a>`,
    },
  };

  const page = window.location.pathname.split("/").pop();

  headerData.nav.navItems.forEach((navItem) => {
    if (navItem.src === `${page}`) {
      // eslint-disable-next-line no-param-reassign
      navItem.selected = true;
    }
  });

  new HeaderComponent(document.body, "main-header", "header", headerData);

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const body = await response.json();

  const pokemons = body.results;
  pokemons.forEach(async (pokemon) => {
    const pokemonResp = await fetch(pokemon.url);
    const pokeBody = await pokemonResp.json();
    new PokemonCardComponent(container, "", "div", pokeBody);
  });
};
func();
