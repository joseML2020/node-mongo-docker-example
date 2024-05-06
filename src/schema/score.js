const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    _id:{
        type: String,
        required:true
    },
    score: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['exam', 'quiz', 'homework']
    }
  });
  
  const Score =  mongoose.model('Score', scoreSchema);
  module.exports = Score;
