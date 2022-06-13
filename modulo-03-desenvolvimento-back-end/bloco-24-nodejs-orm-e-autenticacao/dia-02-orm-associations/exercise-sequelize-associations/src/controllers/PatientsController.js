const { PatientsService } = require('../services');

const getAll = async (_req, res) => {
  const patients = await PatientsService.getAll();

  if (!patients.length)
    return res.status(404).send({ message: 'No patients found' });

  res.status(200).json(patients);
};

const getAllPatientsSurgeries = async (_req, res) => {
  const patientsSurgeries = await PatientsService.getAllPatientsSurgeries();

  if (!patientsSurgeries.length)
    return res.status(404).send({ message: 'No patients found' });

  res.status(200).json(patientsSurgeries);
};

const createPatients = async (req, res) => {
  const createdPatient = await PatientsService.createPatients(req.body);
  res.status(200).json(createdPatient);
};

const getPatientsAndSurgeriesNoDoctor = async (req, res) => {
  const patients = await PatientsService.getPatientsAndSurgeriesNoDoctor();

  if (!patients) return res.status(404).send({ message: 'No patients found' });

  return res.status(200).json(patients);
};

module.exports = {
  getAll,
  getAllPatientsSurgeries,
  createPatients,
  getPatientsAndSurgeriesNoDoctor,
};
