import './style-src.css';
import showList from './showList.js';

const tasks = [
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
    completed: false,
    index: 3,
  },
  {
    description: 'Fourth Task',
    completed: false,
    index: 4,
  },
];

showList(tasks);