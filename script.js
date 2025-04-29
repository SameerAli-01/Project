// It's a my first javascript code To-Do list here.



// my first function call javascript
function addTask() {
    // add a task taskvalue
    const taskValue = document.getElementById('inputTask').value.trim();
    // if condition task values
    if (taskValue === "") {
        // alert msg
        alert("Please enter a task!");
        return;
    } 

    // new task create element list
    const newTask = document.createElement('li');
    newTask.textContent = taskValue;

    // button delete content
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    // function new task remove onclick delete button
    deleteBtn.onclick = function () {
        newTask.remove();
    };

    // newtask appendChild button
    newTask.appendChild(deleteBtn);

    // task list new task
    const taskList = document.getElementById('taskList');
    taskList.appendChild(newTask);

    // empety task add input
    document.getElementById('inputTask').value = "";
}
