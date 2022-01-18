const nums = [1, 2, 3, 4, 5, 6]

const squaredNums = nums.map((num) => num * num)
console.log(squaredNums);

const names = ["ndambo", "paul", "joshua", "benson"]
const capitalizedNames = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
});
console.log(capitalizedNames);

const pokemons = ["Bulbasaur", "Charmaner", "Squirel"]
const newPokemons = pokemons.map((pokemon) => {
    return `<p>${pokemon}</p>`
});
console.log(newPokemons);