const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experiences_schema = new Schema({
   employer:{
      type: String,
      required: false,
      trim: true,
   },
   job_title:{
      type: String,
      required: false,
      trim: true,
   },
   start_date:{
      type: Date,
      required: false,
   },
   end_date:{
      type: Date,
      required: false,
   },
   job_description:{
      type: String,
      required: false,
      trim: true,
   }
});

const education_schema = new Schema({
   school:{
      type: String,
      required: false,
      trim: true,
   },
   degree:{
      type: String,
      required: false,
      trim: true,
   },
   start_date:{
      type: Date,
      required: false,
   },
   end_date:{
      type: Date,
      required: false,
   },
   description:{
      type: String,
      required: false,
      trim: true,
   },
});

const course_schema = new Schema({
   course: {
      type: String,
      required: false,
      trim: true,
   },
   institution: {
      type: String,
      required: false,
      trim: true,
   },
   start_date:{
      type: Date,
      required: false,
   },
   end_date:{
      type: Date,
      required: false,
   },
});

const language_schema = new Schema({
   language:{
      type: String,
      required: false,
      trim: true,
   },
   proeficience_level:{
      type: String,
      required: false,
      trim: true,
   },
});

const links_schema = new Schema({
   label:{
      type: String,
      required: false,
      trim: true,
   },
   link:{
      type: String,
      required: false,
      trim: true,
   }
});

const candidate_schema = new Schema({
   name:{
      type: String,
      required: true,
      trim: true
   },
   phone_number:{
      type: Number,
      required: true,
   },
   email:{
      type: String,
      required: true,
      unique: true,
      trim: true
   },
   profile:{
      type: String,
      required: false,
      trim: true,
   },
   employment_history: [experiences_schema],
   education: [education_schema],
   websites_and_social_links: [links_schema],
   courses: [course_schema],
   language: [language_schema],

});
