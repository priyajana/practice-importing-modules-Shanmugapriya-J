

// Adds the given task to the object
function addTask(tasks,task)
{
    tasks[task] = task;
    console.log("New task successfully added!");
    return tasks;
}

// Lists all the available tasks
function listTasks(tasks)
{
    console.log('Listing all the tasks...')
    console.log(`${JSON.stringify(tasks)}`);
}

module.exports = {addTask,listTasks};