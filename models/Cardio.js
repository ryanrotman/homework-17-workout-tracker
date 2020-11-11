const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioeSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Must include a workout type"
    },
    name: {
        type: String,
        trim: true,
        required: "Must include a workout name"
    }, duration: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;