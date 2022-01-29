// const container = document.querySelector("main-content__list-container");

import PageComponent from "./Components/PageComponent.js";

// const container = document.querySelector(".main-content__list-container");

const renderPage = async () => {
  new PageComponent();

  // const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  // const body = await response.json();

  // const pokemons = body.results;
  // pokemons.forEach(async (pokemon) => {
  //   const pokemonResp = await fetch(pokemon.url);
  //   const pokeBody = await pokemonResp.json();
  //   new PokemonCardComponent(container, "", "div", pokeBody);
  // });
};
renderPage();
