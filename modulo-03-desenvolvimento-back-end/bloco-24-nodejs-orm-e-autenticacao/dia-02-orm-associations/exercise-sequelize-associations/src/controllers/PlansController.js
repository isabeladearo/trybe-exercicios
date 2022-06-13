const { PlansService } = require('../services');

const getById = async (req, res) => {
  const { id } = req.params;

  const plans = await PlansService.getById(id);

  if (!plans.length) return res.status(404).send({ message: 'No plan found' });

  return res.status(200).json(plans);
}

module.exports = { getById };
