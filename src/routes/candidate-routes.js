const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const candidateController = require('../controllers/candidate-controller');

function validateCandidateEmail(){
   return check('email').isEmail().withMessage("O email não é válido");
}

router.post('/insert', [
   validateCandidateEmail('email')
], candidateController.createCandidate);

router.get('/listCandidates', candidateController.listCandidates);

router.get('/findByEmail', [
   validateCandidateEmail('email')
], candidateController.findCandidateByEmail);

router.get('/findByCourse', candidateController.findCandidatesByCourse);

//recebe o id do candidato por parâmetro na rota no formato {"id":"5f858286edc1d828e1d15668"}
router.delete('/delete', 
   candidateController.deleteCandidate
);

module.exports = router;