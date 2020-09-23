const repository = require('../repositories/candidate_repository');
const { validationResult } = require('express-validator');

exports.createCandidate = async(req, res) => {
   const { errors } = validationResult(req);

   if(errors.length > 0){
      return res.status(400).send({ message: errors });
   }

   try{
      
      await repository.createCandidate({
         name : req.body.name,
         phone_number : req.body.phone_number,
         email : req.body.email,
         profile : req.body.profile,

      });
      res.status(201).send({message: 'Candidato registrado!'});
   
   }catch(e){
      res.status(500).send({message: 'Falha ao tentar realizar o registro!'});
   }
}