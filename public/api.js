const API = {
  //get lastWorkout
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts/");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
    console.log([json.length - 1]);
  },

//add exercise
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

//Create Workout
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },
  
//gets all stats?
  async getWorkoutsInRange(data) {
    const res = await fetch(`/api/workouts/range`);
    console.log(res)
    console.log(data)
    console.log(this.getWorkoutsInRange)
    const json = await res.json();


    return json;
  },
};
