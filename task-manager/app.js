// Referred the below url for completing the assignment.
//https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js/

const taskMgr = require('./taskManager');
const fileHdler = require('./fileHandler');

const path = require('path');

// Initializing an empty tasks object.
let tasks = {};

// Load existing tasks from a file named tasks.json.

tasks = fileHdler.loadTasks('tasks.json');
console.log(tasks);

//Add new tasks to the list.
let newtasks = taskMgr.addTask(tasks,'Cut the vegetables');

//List all tasks.
taskMgr.listTasks(newtasks);

//Save the updated task list back to the file.
fileHdler.saveTasks('tasks.json',newtasks); 

/**
 *  Output
 * All tasks loaded !
{
  'Complete Assignment': 'Complete Assignment',
  'Do the laundry': 'Do the laundry',
  'Cook food': 'Cook food',
  'Do the dishes': 'Do the dishes',
  'Pack new clothes': 'Pack new clothes'
}
New task successfully added!
Listing all the tasks...
{"Complete Assignment":"Complete Assignment","Do the laundry":"Do the laundry","Cook food":"Cook food","Do the dishes":"Do the dishes","Pack new clothes":"Pack new clothes","Cut the vegetables":"Cut the vegetables"}
Tasks are updated in the file!
 * 
 */