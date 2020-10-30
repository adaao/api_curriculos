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
         empolyment_history : req.body.empolyment_history,
         education : req.body.education,
         websites_and_social_links : req.body.websites_and_social_links,
         courses : req.body.courses,
         languages : req.body.languages,
      });
      res.status(201).send({message: 'Currículo registrado!'});
   }catch(e){
      res.status(500).send({message: 'Falha ao tentar realizar o registro!\n', e});
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

exports.findCandidatesByCourse = async (req, res) => {
   try{
      console.log('curso procurado: ', req.body.course);
      const data = await repository.findByCourse(req.body.course);
      if(data){
         res.status(200).send(data);
      }else{
         throw 'Nenhum cadidato encontrado.';
      }
   }catch(e){
      res.status(404).send({ message: e });
   }
}

exports.updateCadidate = undefined;

exports.deleteCandidate = async(req, res) => {
   try{
      const data = await repository.deleteCandidate(req.body.id);
      if(data){
         res.status(200).send(data);
      }else{
         throw '';
      }
   }catch(e){
      res.status(404).send({ message: 'Nenhum candidato encontrado através do id fornecido'});
   }
}
