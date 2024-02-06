const fs = require('fs');
let tasks = require('../../data/tasks.json');
const Validator = require('../helpers/validator.js');
class Task {
    static createTask (inputTask) {
        inputTask.id = tasks.length + 1;
        tasks.push(inputTask);
        fs.writeFileSync('data/tasks.json', JSON.stringify(tasks,null,4), {encoding: 'utf8', flag: 'w'});
        return true
    }

    static getTaskById(id) {
        let response = {status:false,data:{}};
        let data = tasks.filter(function(task) {
            return task.id == id;
        })
        if (data.length>0) {
            response.status = true;
            response.data = data[0];
        } 
        return response;
    }

    static getAllTasks(){
        return tasks;
    }

    static updateTaskById(id, data) {
        let task = this.getTaskById(id);
        let validationCheck = Validator.dataTypecheck(data);
        let response = {statusCode:404,details:""};
        if (!task.status) {
            response.details = "Enter a valid id";
            return response;
        } else if(!validationCheck.passed) {
            response.statusCode = 400;
            response.details = validationCheck.error;
            return response;
        } else {
            for (let i=0; i<tasks.length; i++) {
                if (tasks[i].id == id) {
                    if(data.hasOwnProperty("completed")) {
                        tasks[i].completed = data.completed;
                    } 
                    if(data.hasOwnProperty("description")) {
                        tasks[i].description = data.description;
                    } 
                    if(data.hasOwnProperty("title")) {
                        tasks[i].title = data.title;
                        break;
                    }
                }
            }
            fs.writeFileSync('data/tasks.json', JSON.stringify(tasks,null,4), {encoding: 'utf8', flag: 'w'});
            response.details = "Task Updated";
            response.statusCode = 200;
            return response;
        }
    }
    
    static deleteTaskById(id) {
        let task = this.getTaskById(id);
        let response = {statusCode:404,details:""};
        if (!task.status) {
            response.details = "Enter a valid id";
            return response;
        } else {
            for (let i=0; i<tasks.length; i++) {
                if (tasks[i].id == id) {
                    tasks.splice(i,1);
                    break;
                }
            }
            fs.writeFileSync('data/tasks.json', JSON.stringify(tasks,null,4), {encoding: 'utf8', flag: 'w'});
            response.details = "Task deleted successfully";
            response.statusCode = 200;
            return response;
        }
    }
}

module.exports = Task;