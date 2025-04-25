// Referred the below url for completing the assignment.
//https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js/

const taskMgr = require('./taskManager');
const fileHdler = require('./fileHandler');

const path = require('path');

// Initializing an empty tasks object.
let tasks = {};

// calling load task to load existing tasks from the given file.

tasks = fileHdler.loadTasks('tasks.json');
console.log(tasks);
let newtasks = taskMgr.addTask(tasks,'Do the dishes');

taskMgr.listTasks(newtasks);
fileHdler.saveTasks('tasks.json',newtasks); 