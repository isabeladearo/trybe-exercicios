const fs = require("fs").promises;

const getSimpsons = () => (
  fs.readFile('./simpsons.json', 'utf8').then((data) => JSON.parse(data)));

const setSimpsons = (newSimpsons) => (
  fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons)));

module.exports = { getSimpsons, setSimpsons }
