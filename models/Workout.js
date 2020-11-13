const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: "Must include a workout type"
        },
        name: {
            type: String,
            trim: true,
            required: "Must include a workout name"
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        sets: {
            type: Number,
            required: true
        },
        distance: {
            type: Number,
            required: true
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;