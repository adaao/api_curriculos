const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const candidateController = require('../controllers/candidate-controller');

function validateCandidateEmail(){
   return check('email').isEmail().withMessage("O email não é válido");
}

router.post('/', [
   validateCandidateEmail('email')
], candidateController.createCandidate);

//router.get('/findByEmail')

module.exports = router;