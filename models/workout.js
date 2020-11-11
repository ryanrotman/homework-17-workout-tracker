const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // TODO: add schema code here
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;