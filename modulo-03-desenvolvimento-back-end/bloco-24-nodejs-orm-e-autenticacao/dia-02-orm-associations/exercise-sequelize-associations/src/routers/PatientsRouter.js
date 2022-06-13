const express = require('express');
const { PatientsController } = require('../controllers');

const router = express.Router();

router.get('/all', PatientsController.getAll);

router.get(
  '/surgeries/nodoctor',
  PatientsController.getPatientsAndSurgeriesNoDoctor,
);

router.get('/surgeries', PatientsController.getAllPatientsSurgeries);

router.post('/', PatientsController.createPatients);

module.exports = router;
