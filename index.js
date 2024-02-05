const express = require('express');
const app = express();
const PORT = 3000;
let taskData = require('./data/tasks.json');
const Task = require('./src/models/task.js');
app.use(express.json());

app.listen(PORT,(err)=>{
    if(err) {
        console.log("Error occured at port `3000`", err);
    } else {
        console.log("app is listeningg at port", PORT);
    }
});

app.get('/', (req, res) => {
    return res.status(200).send("Welcome to Task Manager App");
})

app.get('/Tasks', (req, res) => {
    return  res.status(200).json(taskData);
});

app.get('/Tasks/:id', (req, res) => {
    let taskData = JSON.stringify(tasks,null,4);
    return  res.status(200).json(taskData);
});

app.post('/Tasks', (req, res) => {
    if (!req.body.title) {
        return  res.status(422).send("Title is a mandatory field,Enter the Task title");
    } else if (!req.body.description) {
        return  res.status(422).send("Description is a mandatory field,Enter the Task Description");
    } else {
        let taskCreationStatus = Task.createTask(req.body);
        if (!taskCreationStatus) {
            return res.status(500).send("Something went wrong while writing the course to the file, please try recreating the course");
        } else {
            return res.status(201).send("Course has been successfuly validated and created");
        }
        // if (Validatior.validateTasks(req.body)) {

        // } 
    }
});

app.put('/Tasks/:id', (req, res) => {
    return  res.status(200).json(tasks);
});

app.delete('/Tasks/:id', (req, res) => {
    return  res.status(200).json(tasks);
});