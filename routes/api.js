const router = require("express").Router();
//const Workout = require("../models/workout");
const Workout = require("../models/workout");
const mongojs = require("mongojs");



module.exports = function (app) {

  // Get last workout
  app.get("/api/workouts", (req, res) => {
    Workout.find({}).sort({"day": 1}).limit(1)
      .then(dbWorkout => {
        console.log(dbWorkout[0].id)
        console.log(mongojs.ObjectId(dbWorkout[0].id))
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  })
  
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({"day": 1}).limit(1)
      .then(dbWorkout => {
        console.log(dbWorkout[0].id)
        console.log(mongojs.ObjectId(dbWorkout[0].id))
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  })


  // Add an exercise (Id is not matching)
  app.put("/api/workouts/:id", ({body, params}, res) => {
    const workout = new Workout(body)
    workout.setTotalDuration();

    Workout.update(
      { _id: params.id },
      { $push: { exercises: body }}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  // Create an exercise (Not being called, the buttons are only making PUT requests)
  app.post("/api/workouts", ({body}, res) => {
    // Set total duration
    const workout = new Workout(body)
    workout.setTotalDuration();

    Workout.create(body) // create a workout
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
}