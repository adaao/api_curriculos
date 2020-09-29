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

exports.listCandidates = async (req, res) => {
   try{
      const data = await repository.listCandidates();
      res.status(200).send(data);
   }catch(e){
      console.log('\n',e,'\n');
      res.status(500).send({message:'Falha ao carregar os dados.'});
   }
}

exports.findCandidateByEmail = async (req, res) => {
   const { errors } = validationResult(req);
   
   if(errors.length > 0){
      return res.status(400).send({ message: errors });
   }

   try{
      
      const data = await repository.findByEmail(req.body.email);
      if(data){
         res.status(200).send(data);
      }else{
         throw '';
      }
      
   
   }catch(e){
      res.status(406).send({message:'O candidato não pode ser encontrado. Verifique se o email está correto e tente novamente.'});
   }
}

exports.updateCadidate = undefined;