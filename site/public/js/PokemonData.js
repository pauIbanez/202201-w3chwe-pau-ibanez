class PokemonData {
  constructor(pokemonObject) {
    this.generateFormatedObject(pokemonObject);
  }

  generateFormatedObject(pokemonObject) {
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

    pokemonObject.stats.forEach((stat) => {
      if (stat.stat.name === "hp") {
        this.hp = stat.base_stat;
      }
      if (stat.stat.name === "attack") {
        this.attack = stat.base_stat;
      }
    });
  }
}
export default PokemonData;
