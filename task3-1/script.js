
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add Task Functionality
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
    }
});

// Add a task to the list
function addTask(taskText) {
    // Create a task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    // Done button
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', () => {
    taskItem.classList.toggle('done');
    });
    taskItem.appendChild(doneButton);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
    taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    // Append task item to the list
    taskList.appendChild(taskItem);
}
