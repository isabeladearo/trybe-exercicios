const express = require("express");
const bodyParser = require('body-parser');
const { getSimpsons, setSimpsons } = require("./fs-utils");
const authMiddleware = require('./authMiddleware');

const app = express();
app.use(bodyParser.json());
app.use(authMiddleware);

app.get("/simpsons", async (_req, res) => {
  try {
    const simpsons = await getSimpsons();
    return res.status(200).json(simpsons);
  } catch (err) {
    return res.status(500).end();
  }
});

app.get("/simpsons:id", async (req, res) => {
  try {
    const simpsons = await getSimpsons();
    const simpsonsFound = simpsons.find(({ id }) => id === req.params.id);

    if (!simpsonsFound) {
      return res.status(404).json({ message: 'simpson not found' });
    }
    return res.status(202).json(simpsonsFound);
  }
  catch (err) {
    return res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await getSimpsons();

    const ids = simpsons.map(({ id }) => id);

    if (ids.includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });
    await setSimpsons(simpsons);

    return res.status(204).end();
  }
  catch (err) {
    res.status(500).end();
  }
})

app.listen(3000, () => console.log("Listenning on port 3000"));
