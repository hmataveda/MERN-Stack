const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

const pkmonId = pokémon.map((item) => {
  return item.id;
});
console.log(pkmonId);

const blisterPoken = pokémon
  .filter((item) => {
    return item.name[0] === "B";
  })
  .map((item) => {
    const name = {
      name: item.name,
    };
    return name;
  });
console.log(blisterPoken);

const EvenId = pokémon.filter((item) => item.id % 3 == 0);
console.log(EvenId);

const fireType = pokémon.filter((item) => item.types.includes("fire"));
console.log(fireType);

const moreTypes = pokémon.filter((item) => item.types.length > 1);
console.log(moreTypes);

const justNames = pokémon.map((item) => item.name);
console.log(justNames);

const namesIDGreter = pokémon
  .filter((item) => item.id > 99)
  .map((item) => item.name);
console.log(namesIDGreter);

const onlyPoisonTYpe = pokémon
  .filter((item) => item.types.length == 1 && item.types[0] == "poison")
  .map((item) => item.name);
console.log(onlyPoisonTYpe);

const normalLength = pokémon.filter((item) => item.types.includes("normal"));

console.log(normalLength.length);

const sirsttypes = pokémon
  .filter((item) => item.types[1] == "flying")
  .map((item) => item.types[0]);
console.log(sirsttypes);
