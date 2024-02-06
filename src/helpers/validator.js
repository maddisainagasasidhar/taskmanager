const { response } = require("express");

class Validator {
    static validateTasks(task) {
        let response = {passed:true, error:""};
        if (!task.title) {
            response.passed = false;
            response.error = "Title is a mandatory field,Enter the Task title";
            return  response;
        } else if (!task.description) {
            response.passed = false;
            response.error = "Description is a mandatory field,Enter the Task Description";
            return  response;
        } else {
            return response;
        }
    }
}

module.exports = Validator;