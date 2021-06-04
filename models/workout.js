const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      duration: {
        type: Number,
        default: 0
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      }, 
      sets: {
        type: Number
      },
    }
  ], 
  totalDuration: {
    type: Number,
    default: 0
  }
});

// Set total duration
WorkoutSchema.methods.setTotalDuration = function() {
  console.log("******************")
  console.log("setTotalDuration is being called!!!")
  this.totalDuration = 0;
  console.log(this.exercises);
  this.exercises.forEach(exercise => {
    this.totalDuration += exercise.duration
  });
  return this.totalDuration;
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
