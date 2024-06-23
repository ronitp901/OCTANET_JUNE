let taskList = document.getElementById('task-list');
let newTaskInput = document.getElementById('new-task');
let addTaskButton = document.getElementById('add-task');

let tasks = [];

addTaskButton.addEventListener('click', addTask);

function addTask() {
  let newTask = newTaskInput.value.trim();
  if (newTask!== '') {
    tasks.push({ text: newTask, done: false });
    newTaskInput.value = '';
    renderTaskList();
  }
}

function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    let taskListItem = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('click', () => {
      task.done = checkbox.checked;
      renderTaskList();
    });
    taskListItem.appendChild(checkbox);
    taskListItem.appendChild(document.createTextNode(task.text));
    taskList.appendChild(taskListItem);
  });
}

renderTaskList();