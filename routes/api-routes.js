// FIXME: figure out why this isn't working
module.exports = (app) => {
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
};