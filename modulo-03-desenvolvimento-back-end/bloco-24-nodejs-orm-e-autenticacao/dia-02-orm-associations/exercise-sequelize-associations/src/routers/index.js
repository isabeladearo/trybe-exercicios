const express = require('express');

const router = express.Router();

router.use('/patients', require('./PatientsRouter'));

router.use('/plans', require('./PlansRouter'));

router.use('/surgeries', require('./SurgeriesRouter'));

module.exports = router;
