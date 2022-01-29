// const container = document.querySelector("main-content__list-container");

import HeaderComponent from "./Components/HeaderComponent.js";
import PokemonCardComponent from "./Components/PokemonCardComponent.js";

// const myPoke = document.querySelector(".main-nav__item:nth-child(2)");

// myPoke.addEventListener("click", (event) => {
//   event.preventDefault();
//   const xmlhttp = new XMLHttpRequest();
//   xmlhttp.open("GET", "html/mypokemon.html", false);
//   xmlhttp.send();
//   document.body.innerHTML = xmlhttp.responseText;
// });
const headerData = {
  nav: {
    class: "main-nav__item",
    htmlTag: "button",
    selectedClass: "main-nav__item--selected",

    navItems: [
      {
        selected: true,
        text: "All Pokémon",
      },

      {
        selected: false,
        text: "My Pokémon",
      },

      {
        selected: false,
        text: "Pokémon Details",
      },
    ],
  },

  info: {
    content: `<a class="official-link">Official Pokémon Website</a>`,
  },
};

new HeaderComponent(document.body, "main-header", "header", headerData);

const container = document.querySelector(".main-content__list-container");

const func = async () => {
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
