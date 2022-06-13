const { SurgeriesService } = require('../services');

const getDoctorSurgeries = async (req, res) => {
  const surgeries = await SurgeriesService.getDoctorSurgeries(req.params);

  if (!surgeries)
    return res.status(404).send({ message: 'No plan found' });

  res.status(200).json(surgeries);
};

module.exports = { getDoctorSurgeries };
