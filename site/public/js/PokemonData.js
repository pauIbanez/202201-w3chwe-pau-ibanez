class PokemonData {
  formattedObject = {};

  constructor(pokemonObject) {
    this.generateFormatedObject(pokemonObject);
  }

  static generateFormatedObject(pokemonObject) {
    this.formattedObject.img = pokemonObject.sprites.other.home.front_default;
    this.formattedObject.name = pokemonObject.name;
    this.formattedObject.id = pokemonObject.id;

    let abilitiesString;

    pokemonObject.abilities.forEach((ability) => {
      if (!ability.hidden) {
        abilitiesString += ` ${ability.ability.name}`;
      }
    });
    this.formattedObject.abilities = abilitiesString;

    const typesArray = [];

    pokemonObject.types.forEach((type) => {
      typesArray.push(type.type.name);
    });

    this.formattedObject.types = typesArray;
  }
}
export default PokemonData;
