const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const config = require('../config.js');
const data = require('./data/students');

//Schema
const Score = require('./schema/score');
const Student = require('./schema/student');

const connectDB = async () => {

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 30000 
      };
      
    try {
        await mongoose.connect(config.MONGODB_URL, options);
        console.log(`Db está conectado`);

        for (const studentData of data) {
            const existingStudent = await Student.findById(studentData._id);
            if (!existingStudent) {
                const arrayScore = await Promise.all(studentData.scores.map(async score => {
                    const existingScore = await Score.findOne({ score: score.score });
                    if (!existingScore) {
                        const newScore = new Score({ ...score, _id: uuidv4() });
                        await newScore.save();
                        return newScore;
                    }
                    return existingScore;
                }));

                const student = new Student(studentData);
                student.scores = arrayScore;
                await student.save();
            }
        }
    } catch (error) {
        console.error('Error:', error);
        // process.exit(1);
    }
};

module.exports = connectDB;
