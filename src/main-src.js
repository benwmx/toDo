/* eslint-disable no-new */

import './style-src.css';
import Sortable from 'sortablejs';
import {
  showList, updateStorage,
  addTask, editTask, updateStatus,
  orderTasks, removeTask, getStorage,
  updateAfterDrag, removeCompletedTasks,
} from './task.js';

let tasks = getStorage();

showList(tasks);

const listDiv = document.getElementById('list');
const clearAllButton = document.getElementById('clear-list');
listDiv.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) {
    if (event.target.className === 'check') {
      tasks = getStorage();
      updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), true);
      showList(tasks);
      updateStorage(tasks);
    }
    if (event.target.className === 'fas fa-check') {
      tasks = getStorage();
      updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), false);
      showList(tasks);
      updateStorage(tasks);
    }
    if (event.target.className === 'fas fa-trash') {
      tasks = getStorage();
      tasks = removeTask(tasks, parseInt(event.target.parentElement.id, 10));
      orderTasks(tasks);
      updateStorage(tasks);
      showList(tasks);
    }
    if (event.target.classList.contains('description')) {
      tasks = getStorage();
      editTask(tasks, event.target);
    }
  }
  event.stopPropagation();
});

clearAllButton.addEventListener('click', () => {
  tasks = removeCompletedTasks(tasks);
  showList(tasks);
});

const addTaskButton = document.getElementById('add');
addTaskButton.addEventListener('click', () => {
  const description = document.getElementById('task-desc').value;
  addTask(tasks, description);
  document.getElementById('task-desc').value = '';
  updateStorage(tasks);
  showList(tasks);
});

new Sortable(listDiv, {
  animation: 100,
  ghostClass: 'dragging',
});

listDiv.addEventListener('dragend', (event) => {
  tasks = updateAfterDrag(listDiv);
  showList(tasks);
  event.stopPropagation();
});
