const express = require('express');
const app = express();
const PORT = 3000;
const Task = require('./src/models/task.js');
const Validator = require('./src/helpers/validator.js');

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
    return  res.status(200).json(Task.getAllTasks());
});

app.get('/Tasks/:id', (req, res) => {
    let response = Task.getTaskById(req.params.id);
    if (!response.status) {
        return  res.status(422).send("Enter a valid id");
    } else {
        return  res.status(200).json(getTask.data);
    }
});

app.post('/Tasks', (req, res) => {
    let validationCheck = Validator.validateTasks(req.body);
    if (!validationCheck.passed){
        return res.status(422).send(validationCheck.error);
    } else {
        let taskCreationStatus = Task.createTask(req.body);
        if (!taskCreationStatus) {
            return res.status(500).send("Something went wrong while writing the course to the file, please try recreating the course");
        } else {
            return res.status(201).send("Course has been successfuly validated and created");
        }
    }
});

app.put('/Tasks/:id', (req, res) => {
    let response = Task.updateTaskById(req.params.id, req.body);
    return  res.status(response.statusCode).json(response.details);
});

app.delete('/Tasks/:id', (req, res) => {
    let response = Task.deleteTaskById(req.params.id, req.body);
    return  res.status(response.statusCode).json(response.details);
});