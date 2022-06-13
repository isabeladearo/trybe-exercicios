const { Plans, Patients } = require('../database/models');

const getById = (id) => Plans.findAll({
  where: { plan_id: id },
  include: [{ model: Patients, as: 'patients' }],
})

module.exports = { getById };
