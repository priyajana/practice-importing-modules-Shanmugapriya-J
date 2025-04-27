

// Adds a new task to the task list 
function addTask(tasks,task)
{
    tasks[task] = task;
    console.log("New task successfully added!");
    return tasks;
}

// Logs all tasks to the console
function listTasks(tasks)
{
    console.log('Listing all the tasks...')
    console.log(`${JSON.stringify(tasks)}`);
}

module.exports = {addTask,listTasks};