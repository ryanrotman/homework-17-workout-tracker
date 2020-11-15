const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// FIXME: will need to remove path if the new require route folders get working
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Routes:
// FIXME: figure out why this isn't working
// require("./routes/html-routes")(app);
// require("./routes/api-routes")(app);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({ body })
        .then(dbNewWorkout => {
            res.json(dbNewWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/api/workouts/:id", ({ params, body }, res) => {
    // console.log("params-------", { params })
    // console.log("body----------", body)
    db.Workout.findByIdAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } }
    )
    .then(dbUpdateWorkout => {
        res.json(dbUpdateWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkoutRange => {
            res.json(dbWorkoutRange);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});