import { getItemFromLocalStorage, saveItemToLocalStorage } from './storage.js';

const createTask = () => {
  const tasks = getItemFromLocalStorage();
  const newTaskDescription = document.getElementById('to-do-input');
  const newTask = {
    description: newTaskDescription.value,
    completed: false,
    index: tasks.length + 1,
  };
  newTaskDescription.value = '';
  tasks.push(newTask);

  saveItemToLocalStorage(tasks);
};

const updateTask = (taskId, el) => {
  const tasks = getItemFromLocalStorage();
  const task = tasks.find((task) => task.id === Number(taskId));

  if (el.hasAttribute('content-editable')) {
    task.description = el.textContent;
  } else {
    task.isCompleted = !task.isCompleted;
    el.classList.toggle('complete', task.isCompleted);
    el.setAttribute('content-editable', !task.isCompleted);
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const deleteTask = (tasks) => {
  const newTask = tasks.filter((task, innerIndex) => index !== innerIndex);
  newTask.forEach((task, index) => {
    task.index = index;
  });
  saveItemToLocalStorage(incomplete);
};

const deleteCompletedTasks = (tasks) => {
  const incomplete = tasks.filter((task) => task.completed !== true);
  incomplete.forEach((task, index) => {
    task.index = index;
  });
  saveItemToLocalStorage(incomplete);
};

export {
  createTask, deleteCompletedTasks, deleteTask, updateTask,
};