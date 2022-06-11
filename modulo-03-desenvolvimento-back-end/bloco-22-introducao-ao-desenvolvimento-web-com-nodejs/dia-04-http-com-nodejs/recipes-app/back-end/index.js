const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { getRecipes, setRecipes } = require('./fs-utils');
const authMiddleware = require('./authMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleware);

app.post('/signup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields'});
    }

    const token = crypto.randomBytes(8).toString('hex');

    return res.status(200).json({ token: token });
  } catch (err) {
    return res.status(500).end();
  }
})

app.get('/recipes', async (_req, res) => {
  try {
    const recipes = await getRecipes();
    return res.status(200).json(recipes);
  } catch (err) {
    return res.status(500).end();
  }
});

app.post('/recipes', async (req, res) => {
  try {
    const recipes = await getRecipes();
    const { id, name, price } = req.body;

    const ids = recipes.map(({ id }) => id);

    if (ids.includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }
  
    recipes.push({ id, name, price });
    await setRecipes(recipes);

    res.status(201).json({ message: 'Recipe created successfully!' });
  } catch (err) {
    res.status(500).end();
  }
});

app.get('/recipes/search', async (req, res) => {
  try {
    const recipes = await getRecipes();
    const { name } = req.query;
    const filteredRecipes = recipes.filter((r) => r.name.toLowerCase().includes(name.toLowerCase()));

    if (!filteredRecipes) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(filteredRecipes);
  } catch (err) {
    return res.status(500).end();
  }
});

app.get('/recipes/:id', async (req, res) => {
  try {
    const recipes = await getRecipes();
    const { id } = req.params;
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  
    if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  
    res.status(200).json(recipe);
  } catch (err) {
    return res.status(500).end();
  }
});

app.put('/recipes/:id', async (req, res) => {
  try {
    const recipes = await getRecipes();
    const { id } = req.params;
    const { name, price } = req.body;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  
    if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  
    recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
    await setRecipes(recipes);
  
    res.status(204).end();
  } catch (err) {
    res.status(500).end();
  }
});

app.delete('/recipes/:id', async (req, res) => {
  try {
    const recipes = await getRecipes();
    const { id } = req.params;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  
    if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  
    recipes.splice(recipeIndex, 1);
    await setRecipes(recipes);
  
    res.status(204).end();
  } catch (err) {
    res.status(500).end();
  }
});

app.all('*', (req, res) => {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Listening on port 3001!');
});
