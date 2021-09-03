/* eslint-disable import/prefer-default-export */

import localStorage from './localStorage.js';

export const updateStorage = (storage) => {
  localStorage.setItem('storage', JSON.stringify(storage));
};

export const addTask = (tasks, description) => {
  const index = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].index + 1;
  const completed = false;
  tasks.push({ description, index, completed });
};

export const removeTask = (tasks, id) => {
  tasks = tasks.filter((task) => task.index !== id);
  return tasks;
};

export const orderTasks = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
};

export const showList = (tasksList) => {
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  for (let index = 0; index < tasksList.length; index += 1) {
    const task = document.createElement('li');
    const remove = document.createElement('i');
    const edit = document.createElement('i');
    const descriptionContainer = document.createElement('div');
    const description = document.createElement('p');
    const editDescription = document.createElement('input');
    if (tasksList[index].completed) {
      const checked = document.createElement('i');
      checked.className = 'fas fa-check';
      descriptionContainer.appendChild(checked);
      description.classList.add('completed');
    } else {
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'check';
      descriptionContainer.appendChild(check);
    }
    edit.className = 'fas fa-edit d-none';
    editDescription.type = 'text';
    editDescription.id = 'edit-Description';
    editDescription.className = 'edit-description d-none';
    task.id = tasksList[index].index;
    remove.className = 'fas fa-trash';
    descriptionContainer.classList.add('description-container');
    description.className += ' description';
    description.innerHTML += ` ${tasksList[index].description}`;
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(editDescription);
    task.className = 'task';
    task.setAttribute('draggable', 'true');
    task.appendChild(descriptionContainer);
    task.appendChild(remove);
    task.appendChild(edit);
    listDiv.appendChild(task);
  }
};

export const updateStatus = (list, id, completed) => {
  list.forEach((task) => {
    if (task.index === id) task.completed = completed;
  });
};

export const removeCompletedTasks = (tasks) => {
  tasks = tasks.filter((task) => task.completed === false);
  orderTasks(tasks);
  updateStorage(tasks);
  return tasks;
};

export const edit = (tasks, description, id) => {
  tasks[id - 1].description = description;
};