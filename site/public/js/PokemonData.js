class PokemonData {
  constructor(pokemonObject, myPokemon) {
    this.generateFormatedObject(pokemonObject, myPokemon);
  }

  generateFormatedObject(pokemonObject, myPokemon) {
    this.img = pokemonObject.sprites.other.home.front_default;
    this.shinyImg = pokemonObject.sprites.other.home.front_shiny;
    this.name = pokemonObject.name;
    this.id = pokemonObject.id;

    let abilitiesString = "";

    pokemonObject.abilities.forEach((ability) => {
      if (!ability.hidden) {
        abilitiesString += ` ${ability.ability.name}`;
      }
    });

    this.abilities = abilitiesString;

    const typesArray = [];

    pokemonObject.types.forEach((type) => {
      typesArray.push(type.type.name);
    });

    this.types = typesArray;

    const stats = [];

    pokemonObject.stats.forEach((stat) => {
      const statObject = { name: stat.stat.name, value: stat.base_stat };
      stats.push(statObject);
    });

    this.stats = stats;

    this.shiny = false;

    this.weight = pokemonObject.weight;

    this.height = 7;

    const moves = [];
    pokemonObject.moves.forEach(({ move }) => {
      moves.push(move.name);
    });

    this.moves = moves;

    const myListVersion = myPokemon.find(
      (pokemon) => pokemon.id === pokemonObject.id
    );

    if (myListVersion) {
      this.doWeHaveIt = true;
      this.shiny = myListVersion.shiny;
    } else {
      this.doWeHaveIt = false;
    }
  }
}
export default PokemonData;
