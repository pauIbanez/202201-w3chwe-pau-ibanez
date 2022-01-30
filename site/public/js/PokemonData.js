class PokemonData {
  constructor(pokemonObject, myPokemon) {
    this.generateFormatedObject(pokemonObject, myPokemon);
  }

  generateFormatedObject(pokemonObject, myPokemon) {
    this.img = pokemonObject.sprites.other.home.front_default;
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
      // if (stat.stat.name === "hp") {
      //   this.hp = stat.base_stat;
      // }
      // if (stat.stat.name === "attack") {
      //   this.attack = stat.base_stat;
      // }
      // if (stat.stat.name === "defense") {
      //   this.hp = stat.base_stat;
      // }
      // if (stat.stat.name === "attack") {
      //   this.attack = stat.base_stat;
      // }
    });

    this.shiny = false;

    this.weight = pokemonObject.weight;

    this.height = 7;
    const moves = [];

    this.pokemonObject.moves.forEach(({ move }) => {
      moves.push(move.name);
    });

    this.moves = moves;

    if (myPokemon.some((pokemon) => pokemon.id === pokemonObject.id)) {
      this.doWeHaveIt = true;
    } else {
      this.doWeHaveIt = false;
    }
  }
}
export default PokemonData;
