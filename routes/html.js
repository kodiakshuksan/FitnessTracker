
//const express = require("express");
//const app = express();
const path = require("path");
const router = require("express").Router();
const Workout = require("../models/workout");

module.exports = function (app) {
  // Route to main page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Route to exercises
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  // Route to exercises
  app.get("/exercise?", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  // Route to dashboard
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  })
}