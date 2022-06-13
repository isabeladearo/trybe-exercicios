const { Surgeries, Patients } = require('../database/models');

const getDoctorSurgeries = ({ name }) => Surgeries.findAll({
    where: { doctor: name },
    include: [{ model: Patients, as: 'patients', through: { attributes: [] } }],
  });

module.exports = { getDoctorSurgeries };
