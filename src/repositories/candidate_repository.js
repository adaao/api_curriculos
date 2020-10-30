const mongoose = require('mongoose');
const { countDocuments } = require('../models/candidate');
const Candidate = mongoose.model('Candidate');

exports.createCandidate = async data => {
   const candidate = new Candidate(data);
   await candidate.save();
}

exports.updateCandidate = async (id, data) => {
   await Candidate.findByIdAndUpdate(id,{
      $set: data
   });
}

exports.deleteCandidate = async (id) => {
   const data = await Candidate.findByIdAndDelete(id);
   return data;
}

exports.findByEmail = async (email) => {
   const candidate = await Candidate.findOne({ email: email }, '-_id');
   return candidate;
};

exports.findByCourse = async (course) => {
   const candidates = await Candidate.find({ course : course }, '-_id');
   return candidates;
};

exports.findByLanguage = async (language) => {
   await Candidate.find({ language });
};

exports.listCandidates = async () => {
   const res = await Candidate.find({}, '-_id');
   return res;
}
