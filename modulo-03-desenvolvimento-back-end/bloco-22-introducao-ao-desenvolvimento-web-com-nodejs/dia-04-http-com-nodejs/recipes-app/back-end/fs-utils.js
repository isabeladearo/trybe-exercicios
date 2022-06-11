const fs = require("fs").promises;

const getRecipes = () => (
  fs.readFile('./recipes.json', 'utf8').then((data) => JSON.parse(data)));

const setRecipes = (newRecipes) => (
  fs.writeFile('./recipes.json', JSON.stringify(newRecipes)));

module.exports = { getRecipes, setRecipes }
