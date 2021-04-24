const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate()-9),
    },

    exercises: {
        type: String,
        name: String,
        },

    duration: {
        type: Number,
        },

    weight: {
        type: Number,
        },
    
    reps: {
        type: Number,
        }, 
        
    sets: {
        type: Number,
        },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

