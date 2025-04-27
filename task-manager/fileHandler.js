const fs = require('fs');

// Given filePath , tasks object. This function takes the object and appends it  to the end of the file.
// Writes the tasks to a file in JSON format.
function saveTasks(filePath, tasks)
{
    try
    {
        
            
                fs.writeFileSync(filePath, `${JSON.stringify(tasks)}`);
                //fs.writeFileSync(filePath, `${JSON.stringify(key)}: ${JSON.stringify(tasks[key])}`);     
           
            
            console.log('Tasks are updated in the file!');
    }
    catch(e)
    {
        console.error(e);
    }
   
}

// Given file path. This function reads and parses the file content and displays them.
//Reads and parses the tasks from the file.
function loadTasks(filePath)
{
    try
    {
        if (!fs.existsSync(filePath)) {
            console.log('The file does not exist!');
            return [];
         }
        else{
            let content = fs.readFileSync(filePath,'utf-8');
            console.log(`All tasks loaded !`);
            return JSON.parse(content);
        }
    }
    catch(error){
        console.log(error);
    }
    
}

module.exports = {saveTasks,loadTasks};