const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    scores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Score'
      }
    ]
  });

  const Student =  mongoose.model('Student', studentSchema);
  module.exports = Student;
