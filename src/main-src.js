import './style-src.css';
import showList from './showList.js';
import updateStatus from './updateStatus.js';
import updateStorage from './updateStorage.js';
import getStorage from './getStorage.js';

let tasks = [
  {
    description: 'first Task',
    completed: false,
    index: 1,
  },
  {
    description: 'Second Task',
    completed: false,
    index: 2,
  },
  {
    description: 'Third Task',
    completed: true,
    index: 3,
  },
  {
    description: 'Fourth Task',
    completed: false,
    index: 4,
  },
];

if (getStorage().length !== 0) tasks = getStorage();

showList(tasks);

const listDiv = document.getElementById('list');
listDiv.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) {
    if (event.target.className === 'check') {
      updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), true);
      showList(tasks);
      updateStorage(tasks);
    }
    if (event.target.className === 'fas fa-check') {
      updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), false);
      showList(tasks);
      updateStorage(tasks);
    }
  }
  event.stopPropagation();
});