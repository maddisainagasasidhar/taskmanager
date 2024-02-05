const fs = require('fs');
let tasks = require('../../data/tasks.json');
class Task {
    static createTask (inputTask) {
        inputTask.id = tasks.length + 1;
        tasks.push(inputTask);
        fs.writeFileSync('data/tasks.json', JSON.stringify(tasks,null,4), {encoding: 'utf8', flag: 'w'});
        return true
    }
}

module.exports = Task;