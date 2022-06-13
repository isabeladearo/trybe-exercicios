const { Patients, Plans, Surgeries } = require('../database/models');

const getAll = () =>
  Patients.findAll({
    include: { model: Plans, as: 'plan' },
  });

const getAllPatientsSurgeries = () =>
  Patients.findAll({
    include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } },
  });

const createPatients = ({ fullname, plan_id }) =>
  Patients.create({ fullname, plan_id });

const getPatientsAndSurgeriesNoDoctor = () => Patients.findAll({
  include: {
    model: Surgeries,
    as: 'surgeries',
    attributes: { exclude: ['doctor'] },
    through: { attributes: [] },
  },
});

module.exports = {
  getAll,
  getAllPatientsSurgeries,
  createPatients,
  getPatientsAndSurgeriesNoDoctor,
};
